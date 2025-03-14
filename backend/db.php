<?php
$host = "localhost";
$dbname = "basic_ecommerce";
$dbUser = "root";
$dbPassword = "";

$conn = mysqli_connect($host, $dbUser, $dbPassword, $dbname);

if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}
// else{
//     echo "successfully connected";
// }



?>