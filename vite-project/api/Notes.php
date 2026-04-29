<?php
require 'db.php';

// Checks for logged in users
if (!isset($_SESSION['user_id'])) {
    echo json_encode(["status" => "error", "message" => "You must be logged in to add anime."]);
    exit();
}

$user_id = $_SESSION['user_id'];

// Obtain JSON data from React frontend
$data = json_decode(file_get_contents("php://input"));

if (isset($data->anime_id)) {
    $anime_id = $data->anime_id;

    $check = $conn->prepare("SELECT id FROM user_anime_list WHERE user_id = ? AND anime_id = ?");
    $check->bind_param("ii", $user_id, $anime_id);
    $check->execute();
    $result = $check->get_result();

    if ($result->num_rows > 0) {
        // Removes it from list if exists
        $delete = $conn->prepare("DELETE FROM user_anime_list WHERE user_id = ? AND anime_id = ?");
        $delete->bind_param("ii", $user_id, $anime_id);
        $delete->execute();
        echo json_encode(["status" => "removed", "message" => "Removed from your list."]);
    } else {
        // Adds it to the list if it doesn't exist
        $insert = $conn->prepare("INSERT INTO user_anime_list (user_id, anime_id) VALUES (?, ?)");
        $insert->bind_param("ii", $user_id, $anime_id);
        $insert->execute();
        echo json_encode(["status" => "added", "message" => "Added to your list!"]);
    }
}
?>