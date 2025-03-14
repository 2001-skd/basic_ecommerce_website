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

// Include JWT library
require_once 'vendor/autoload.php';
use \Firebase\JWT\JWT;

// secret Key
$secretKey = bin2hex(openssl_random_pseudo_bytes(32));
$data = json_decode(file_get_contents("php://input"),true);

$userMail = $data["usermail"];
$userpwd = $data["userpassword"];

$checkEmail = "SELECT * FROM user WHERE email = ?";
$stmt = $conn->prepare($checkEmail);
$stmt->bind_param("s",$userMail);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if($user){
    if(password_verify($userpwd,$user['password'])){
        $payload = [
            'username'=>$user['name'],
            'usermail'=>$user['email'],
            'userid'=>$user['id']

        ];

        $jwt = JWT::encode($payload, $secretKey,'HS256');

        echo json_encode([
            "message"=>"Login Successful",
            'token'=>$jwt,
            'user' => [
                'id' => $user['id'],
                'name' => $user['name'],
                'email' => $user['email'],
            ]
            ]);
    }else {
        echo json_encode(['message' => 'Invalid credentials']);
        http_response_code(400); 
    }
}
else {
    echo json_encode(['message' => 'User not found']);
    http_response_code(404);
}
?>