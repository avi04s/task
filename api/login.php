<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    require_once 'vendor/autoload.php';


    $clientID = '790298820234-fgsvcgq9tf6s3qgl0e8uqrbpja5d4adf.apps.googleusercontent.com';
    $clientSecret = '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';
    $redirectUrl =  'http://localhost/PHP/google-login/login.php';
   // $redirectUrl = 'http://localhost:8080';



    //creating client request to google

    $client = new Google_Client();
    $client->setClientId($clientID);
    $client->setClientSecret($clientSecret);
    $client->setRedirectUri($redirectUrl);

    $client->addScope('profile');
    $client->addScope('email');


    if(isset($_GET['code']) ){
        $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
        $client->setAccessToken($token);

        $gauth = new Google_Service_Oauth2($client);
        $google_info = $gauth->userinfo->get();
        $email = $google_info->email;
        $name = $google_info->name;

       // echo "Welcome ". $name ."You are registerd using email: ".$email;
       echo $name;
       
    }
    else{
       
      //  echo "<a href='".$client->createAuthUrl()."' >Login with Google</a>";
        
        echo $client->createAuthUrl();
        

    }


?>