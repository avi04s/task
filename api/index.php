<?php


$received_data = json_decode(file_get_contents("php://input"));

if($received_data->action == 'googleSignin'){
    require_once dirname(__DIR__, 1).'\vendor\autoload.php';

    $client = new Google\Client();
    $client->setAuthConfig(dirname(__DIR__, 1).'\client_credentials.json');

    // Your redirect URI can be any registered URI, but in this example
    // we redirect back to this same page
    $redirect_uri = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF'];
    $client->setRedirectUri($redirect_uri);
    
    if (isset($received_data->token)) {
        $token = $client->fetchAccessTokenWithAuthCode($received_data->token); //this is where it fails, eventhough the token is set
        $client->setAccessToken($token);

        // store in the session also
        $_SESSION['upload_token'] = $token;
    }

    $output = array(
        'token' => $received_data->token
    );
    
    echo json_encode($output);

}
?>