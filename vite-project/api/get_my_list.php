<?php
require 'db.php';

// Only allow logged in users
if (!isset($_SESSION['user_id'])) {
    echo json_encode(["status" => "error", "message" => "Not logged in."]);
    exit();
}

$user_id = $_SESSION['user_id'];

// SQL JOIN: Merges the User saved list with anime details
$query = "
    SELECT 
        a.id, 
        a.name, 
        a.image_filename, 
        a.eps, 
        a.tags, 
        a.rating,
        ual.status AS watch_status, 
        ual.score AS personal_score, 
        ual.episodes_watched
    FROM user_anime_list ual
    JOIN anime a ON ual.anime_id = a.id
    WHERE ual.user_id = ?
    ORDER BY ual.added_at DESC
";

$stmt = $conn->prepare($query);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();

$my_list = [];
while ($row = $result->fetch_assoc()) {
    $my_list[] = $row;
}

// Pass merged data back to React frontend
echo json_encode(["status" => "success", "data" => $my_list]);

$stmt->close();
$conn->close();
?>