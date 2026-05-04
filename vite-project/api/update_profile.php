<?php
require 'db.php';
require 'vendor/autoload.php'; // Required for AWS SDK

use Aws\S3\S3Client;
use Aws\Exception\AwsException;

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

// --- S3 Configuration ---
$bucketName = 'group10-anilibrary-assets'; // Confirm this matches your bucket
$region = 'us-east-1'; 

// Initialize S3 Client
$s3 = new S3Client([
    'version' => 'latest',
    'region'  => $region
]);
// ------------------------

// handle file upload if image has been selected
if (isset($_FILES['avatar']) && $_FILES['avatar']['error'] === UPLOAD_ERR_OK) {
    $fileTmpPath = $_FILES['avatar']['tmp_name'];
    $newFileName = "user_" . $user_id . "_" . time() . ".jpg";
    $keyName = 'images/avatars/' . $newFileName; // The path inside your S3 bucket

    try {
        // Upload data directly to S3 (No local saving!)
        $result = $s3->putObject([
            'Bucket' => $bucketName,
            'Key'    => $keyName,
            'SourceFile' => $fileTmpPath,
            'ACL'    => 'public-read' // Important: Makes the image viewable
        ]);

        // Get the S3 URL to send back to React
        $avatar_url = $result->get('ObjectURL');
        
        // update db with new image filename
        $stmt = $conn->prepare("UPDATE users SET avatar_filename = ? WHERE id = ?");
        $stmt->bind_param("si", $avatar_url, $user_id); // Save the full URL to DB
        $stmt->execute();
        $stmt->close();

    } catch (AwsException $e) {
        // Catch any AWS SDK errors
        echo json_encode(["status" => "error", "message" => "S3 Upload Failed: " . $e->getAwsErrorMessage()]);
        exit();
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