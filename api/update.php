<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

require __DIR__ . '/classes/Database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

function msg($success, $status, $message, $email,$name,$file,$phone,$current_address,$permanent_address,$gender,$designation, $extra = [])
{
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message,
        'email'=> $email,
        'name'=>$name,
        'file'=>$file,
        'phone' =>$phone,
        'current_address' =>$current_address,
        'permanent_address' =>$permanent_address,
        'gender' =>$gender,
        'designation' => $designation,
    ], $extra);
}

// DATA FORM REQUEST
//$data = json_decode(file_get_contents("php://input"));
$returnData = [];







if ($_SERVER["REQUEST_METHOD"] != "POST") :

    $returnData = msg(0, 404, 'Page Not Found!','null','null','null','null','null','null','null','null');

elseif (
    !isset($_POST['id'])
    || !isset($_POST['name'])
    || !isset($_POST['email'])
    || !isset($_POST['phone'])
    || !isset($_POST['gender'])
    || !isset($_POST['current_address'])
    || !isset($_POST['permanent_address'])
    || !isset($_POST['designation'])
    || empty(trim($_POST['id']))
    || empty(trim($_POST['name']))
    || empty(trim($_POST['email']))
    || empty(trim($_POST['phone']))
    || empty(trim($_POST['gender']))
    || empty(trim($_POST['current_address']))
    || empty(trim($_POST['permanent_address']))
    || empty(trim($_POST['designation']))

    
) :
    
    $fields = ['fields' => ['id','name', 'email']];
    $returnData = msg(0, 422, 'Please Fill in all Required Fields!','null','null','null','null','null','null','null','null', $fields);

// IF THERE ARE NO EMPTY FIELDS THEN-
else :

    $id = trim($_POST['id']);
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $current_address = trim($_POST['current_address']);
    $permanent_address = trim($_POST['permanent_address']);
    $gender = trim($_POST['gender']);
    $designation = trim($_POST['designation']);

    if(isset($_FILES['file']['tmp_name'])):
        $file = '';
        $fileName  =  $_FILES['file']['name'];
        $tempPath  =  $_FILES['file']['tmp_name'];
        $fileSize  =  $_FILES['file']['size'];
    endif;
  

   


    //$password = trim($data->password);
    if (!filter_var($email, FILTER_VALIDATE_EMAIL) ) :
        $returnData = msg(0, 422, 'Invalid Email Address!','null','null','null','null','null','null','null','null');

    elseif (strlen($name) < 3) :
        $returnData = msg(0, 422, 'Your name must be at least 3 characters long!','null','null','null','null','null','null','null','null');
    
  



    else :
        try {


            $check_email = "SELECT `email` FROM `users` WHERE `email`=:email";
            $check_email_stmt = $conn->prepare($check_email);
            $check_email_stmt->bindValue(':email', $email, PDO::PARAM_STR);
            $check_email_stmt->execute();

            
            if(isset($_FILES['file']['tmp_name'])):

                $fileExt = strtolower(pathinfo($fileName,PATHINFO_EXTENSION)); // get image extension
                
                // valid image extensions
                $valid_extensions = array('jpeg', 'jpg', 'png', 'gif'); 
        
                if(in_array($fileExt, $valid_extensions)):

                    if (move_uploaded_file($_FILES["file"]["tmp_name"],"../upload/".$_FILES['file']['name'])) :
                        
                        $file = "https://www.alegralabs.com/abhijit/upload/".$_FILES['file']['name'];
                    endif;

                else:
                    $returnData = msg(0, 422, 'Sorry, only JPG, JPEG, PNG & GIF files are allowed','null','null','null','null','null','null','null','null');
        
                endif;
            
            endif;

            if ($check_email_stmt->rowCount()) :

            
                //$insert_query = "INSERT INTO `users`(`name`,`email`,`password`) VALUES(:name,:email,:password)";

                if(isset($_FILES['file']['tmp_name'])):
                    $insert_query = "UPDATE `users` SET `name`=:name, `email`=:email, `file`=:file, `phone`=:phone, `current_address`=:current_address,`permanent_address`=:permanent_address,`gender`=:gender,`designation`=:designation WHERE `id`=:id ";
                else:
                    $insert_query = "UPDATE `users` SET `name`=:name, `email`=:email, `phone`=:phone, `current_address`=:current_address,`permanent_address`=:permanent_address,`gender`=:gender,`designation`=:designation WHERE `id`=:id ";
                endif;

                $insert_stmt = $conn->prepare($insert_query);

                // DATA BINDING
                $insert_stmt->bindValue(':name', htmlspecialchars(strip_tags($name)), PDO::PARAM_STR);
                $insert_stmt->bindValue(':email', $email, PDO::PARAM_STR);
                $insert_stmt->bindValue(':id', $id, PDO::PARAM_STR);

                $insert_stmt->bindValue(':phone', $phone, PDO::PARAM_STR);
                $insert_stmt->bindValue(':current_address', $current_address, PDO::PARAM_STR);
                $insert_stmt->bindValue(':permanent_address', $permanent_address, PDO::PARAM_STR);
                $insert_stmt->bindValue(':gender', $gender, PDO::PARAM_STR);
                $insert_stmt->bindValue(':designation', $designation, PDO::PARAM_STR);

                if(isset($_FILES['file']['tmp_name'])):
                    $insert_stmt->bindValue(':file', $file, PDO::PARAM_STR);
                endif;
                //$insert_stmt->bindValue(':password', password_hash($password, PASSWORD_DEFAULT), PDO::PARAM_STR);

                $insert_stmt->execute();

            

                $returnData = msg(1, 201, 'You have successfully updated.',$email,$name,$file,$phone,$current_address,$permanent_address,$gender,$designation);

           else :
               
               $returnData = msg(0, 422, 'This E-mail is not registered!','null','null','null','null','null','null','null','null');

           endif;
        
            
                    
            



        

           
        } catch (PDOException $e) {
            $returnData = msg(0, 500, $e->getMessage(),'null','null','null');
        }
    endif;
endif;

echo json_encode($returnData);