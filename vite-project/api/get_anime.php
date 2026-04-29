<?php
require 'db.php';

$query = "SELECT * FROM anime ORDER BY rating DESC";
$result = $conn->query($query);

$anime_list = [];

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $anime_list[] = $row;
    }
    
    echo json_encode(["status" => "success", "data" => $anime_list]);
} else {
    echo json_encode(["status" => "error", "message" => "No anime found", "data" => []]);
}

$conn->close();
?>