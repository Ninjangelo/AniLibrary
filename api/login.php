<?php
require 'db.php';

// Decode the JSON data from React
$data = json_decode(file_get_contents("php://input"));

if (isset($data->email) && isset($data->password)) {
    // Cleans your Email input (e.g. "O'Reilly@example.com" becomes "O\'Reilly@example.com")
    $email = $conn->real_escape_string($data->email);
    
    // Database search for stated Email
    $stmt = $conn->prepare("SELECT id, password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    // Checking if the user exists
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        // Verify the hashed password field
        if (password_verify($data->password, $user['password'])) {
            echo json_encode(["status" => "success", "message" => "Login successful!"]);
        } else {
            echo json_encode(["status" => "error", "message" => "Incorrect password."]);
        }
    } else {
        echo json_encode(["status" => "error", "message" => "User not found."]);
    }
    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "Invalid input."]);
}
?>