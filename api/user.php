<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: access");
  header("Access-Control-Allow-Methods: GET");
  header("Content-Type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$host = "localhost"; /* Host name */
$user = "root"; /* User */
$password = ""; /* Password */
$dbname = "vuejs"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}


// DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));

//$email = trim($data->email);
//echo $_GET['data'];

$email = trim($_GET['data']);


//$userData = mysqli_query($con,"select * from users WHERE email=".$email);

$userData = mysqli_query($con,"select * from users WHERE email = '$email' ");

$response = array();

$row = mysqli_fetch_array($userData,MYSQLI_ASSOC);




/*
while($row = mysqli_fetch_assoc($userData)){

   $response[] = $row;
}*/

$user =  array_merge([
  'id' => $row['id'],
  'name' => $row['name'],
  'email' => $row['email'],
  'file' =>$row['file'],

]);



echo json_encode($user);


exit;


?>
        