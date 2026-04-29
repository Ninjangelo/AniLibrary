<?php
require 'db.php';

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["status" => "error", "message" => "Not logged in."]);
    exit();
}

$user_id = $_SESSION['user_id'];

// obtain the text fields sent via FormData
$new_username = isset($_POST['username']) ? trim($_POST['username']) : null;
$new_email = isset($_POST['email']) ? trim($_POST['email']) : null;
$new_bio = isset($_POST['bio']) ? trim($_POST['bio']) : null;

$avatar_url = null;

// handle file upload if image has been selected
if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] === UPLOAD_ERR_OK) {
    $fileTmpPath = $_FILES['avatar']['tmp_name'];
    $newFileName = "user_" . $user_id . "_" . time() . ".jpg";
    $dest_path = "../images/avatars/" . $newFileName;

    if(move_uploaded_file($fileTmpPath, $dest_path)) {
        
        $check = $conn->prepare("SELECT avatar_filename FROM users WHERE id = ?");
        $check->bind_param("i", $user_id);
        $check->execute();
        $result = $check->get_result();
        
        if ($row = $result->fetch_assoc()) {
            $old_avatar = $row['avatar_filename'];
            // deletes file if it exists on the server
            if ($old_avatar && file_exists("../images/avatars/" . $old_avatar)) {
                unlink("../images/avatars/" . $old_avatar); // unlink() deletes files in PHP
            }
        }
        $check->close();
        // ----------------------------------------------

        $avatar_url = "/images/avatars/" . $newFileName;
        
        // update db with new image filename
        $stmt = $conn->prepare("UPDATE users SET avatar_filename = ? WHERE id = ?");
        $stmt->bind_param("si", $newFileName, $user_id);
        $stmt->execute();
        $stmt->close();
    }
}

// handle text updates if user has altered username or email
if ($new_username && $new_email) {
    $stmt = $conn->prepare("UPDATE users SET name = ?, email = ?, bio = ? WHERE id = ?");
    $stmt->bind_param("sssi", $new_username, $new_email, $new_bio, $user_id);
    $stmt->execute();
    $stmt->close();
    
    // update php session to remember new name
    $_SESSION['user_name'] = $new_username; 
}

// display success message
echo json_encode([
    "status" => "success", 
    "message" => "Profile updated successfully!",
    "new_username" => $new_username,
    "new_email" => $new_email,
    "avatar_url" => $avatar_url,
    "new_bio" => $new_bio
]);

$conn->close();
?>