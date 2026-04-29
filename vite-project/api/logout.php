<?php
// Resumes session and sets CORS headers
require 'db.php';

// Empties session array of values (e.g. user_id and user_name)
$_SESSION = array();

session_destroy();

// Successful Logout
echo json_encode(["status" => "success", "message" => "Logged out successfully"]);
?>