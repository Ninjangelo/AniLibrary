<?php
require 'db.php';

// Decode the JSON data from React
$data = json_decode(file_get_contents("php://input"));

// If the Email and Password data from the React Application has been stated
if (isset($data->email) && isset($data->password)) {
    // Cleans your Email input (e.g. "O'Reilly@example.com" becomes "O\'Reilly@example.com")
    $email = $conn->real_escape_string($data->email);
    // Password Hashed
    $hashed_password = password_hash($data->password, PASSWORD_DEFAULT);

    // Prepared statements to avoid chances of SQL injection
    $stmt = $conn->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $hashed_password);


    // Responses to return to the React App for Register status messages to display on UI
    if ($stmt->execute()) {
        echo json_encode(["status" => "success", "message" => "User registered successfully"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Email may already exist"]);
    }
    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "Invalid input"]);
}
?>