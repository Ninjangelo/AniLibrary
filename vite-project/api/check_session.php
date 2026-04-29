<?php
// Import db.php due to session_start()
require 'db.php'; 

// Checking if server memory holds the user for the specific browser
if (isset($_SESSION['user_id']) && isset($_SESSION['user_name'])) {
    // Returns it back to React app if successful
    echo json_encode([
        "status" => "success",
        "user_name" => $_SESSION['user_name']
    ]);
} else {
    // Returns to React app as a Guest
    echo json_encode([
        "status" => "error",
        "message" => "Not logged in"
    ]);
}
?>