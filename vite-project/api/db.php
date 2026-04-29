<?php
session_start();

// Enable REQUESTS from the React App
header("Access-Control-Allow-Origin: http://localhost:5173"); 
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Credentials: true");

// Ensures that the request being made to the PHP Server is an OPTIONS request
// OPTIONS Request - A test request to ensure if the server expects a certain request 
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// MySQL Database Connection Details
$host = "localhost";
$user = "root";
$pass = ""; // On default XAMPP MySQL DB is empty
$dbname = "anime_db";

// Establishing connection with DB
$conn = new mysqli($host, $user, $pass, $dbname);

$conn->set_charset("utf8mb4");

// Alternatively, if connection fails, change status to an error
if ($conn->connect_error) {
    die(json_encode(["status" => "error", "message" => "Database connection failed"]));
}
?>