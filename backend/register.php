<?php


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Allow from any origin
header("Access-Control-Allow-Origin: *");

// Allow specific HTTP methods
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");

// Allow specific headers
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Content-Type for JSON
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// include database connection
include "db.php";


if($_SERVER['REQUEST_METHOD'] === "POST"){

    $data = json_decode(file_get_contents("php://input"),true);
    if(!$data){
        echo json_encode(["message"=>"Invalid JSON Request"]);
        http_response_code(400);
        
    }

    $userName = $data["username"];
    $userMail = $data["usermail"];
    $userPassword = $data["userpassword"];

    $checkMailQuery = "SELECT * FROM user WHERE email = ?";

    $stmt = $conn->prepare($checkMailQuery);
    $stmt->bind_param("s",$userMail);
    $stmt->execute();
    $result = $stmt->get_result();
    $existingUser = $result->fetch_assoc();

    if($existingUser){
        echo json_encode(["message"=> "User Already Exists, Please Login"]);
        http_response_code(400);
    }
    else{
        $hashedPassword = password_hash($userPassword,PASSWORD_BCRYPT);

        $insertSql = "INSERT INTO user (name,email,password) VALUES (?,?,?)";
        $stmt = $conn->prepare($insertSql);
        $stmt->bind_param("sss",$userName,$userMail,$hashedPassword);
        $stmt->execute();

        http_response_code(200);
        echo json_encode(["message"=> "User Registered Successfully."]);
    }
}
else {
    http_response_code(405); 
    echo json_encode(['message' => 'Invalid request method']);
}
?>