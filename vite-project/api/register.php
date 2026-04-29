<?php
require 'db.php';

// Decode the JSON data from React
$data = json_decode(file_get_contents("php://input"));

// If the Email and Password data from the React Application has been stated
if (isset($data->name) && isset($data->email) && isset($data->password)) {
    
    // Data Formatting and Cleaning
    $name = $conn->real_escape_string($data->name);
    // Cleans your Email input (e.g. "O'Reilly@example.com" becomes "O\'Reilly@example.com")
    $email = $conn->real_escape_string($data->email);
    // Password Hashed
    $hashed_password = password_hash($data->password, PASSWORD_DEFAULT);

    // Prepared statements to avoid chances of SQL injection
    $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $hashed_password);

    try {
        $stmt->execute();

        $new_user_id = $conn->insert_id;

        $_SESSION['user_id'] = $new_user_id;
        $_SESSION['user_name'] = $name;

        echo json_encode(["status" => "success", "message" => "User registered successfully"]);
    } catch (mysqli_sql_exception $e) {
        // Catching "Duplicate Entry" Error in MySQL
        if ($e->getCode() == 1062) {
            echo json_encode(["status" => "error", "message" => "This email is already registered."]);
        } else {
            // Catching any other database errors
            echo json_encode(["status" => "error", "message" => "Database error: " . $e->getMessage()]); 
        }
    }
    
    $stmt->close();
} else {
    echo json_encode(["status" => "error", "message" => "Invalid input"]);
}
?>