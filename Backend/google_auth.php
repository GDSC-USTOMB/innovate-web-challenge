<?php
require_once __DIR__ . '/vendor/autoload.php';

// Initialize Google Client
$client = new Google_Client();
$client->setClientId('182706361187-a0fneuovmpqo83if9cqlbc1os1lr5kis.apps.googleusercontent.com'); // Replace with your Google Client ID
$client->setClientSecret('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'); // Replace with your Google Client Secret
$client->setRedirectUri('http://localhost/innovate-web-challenge-team1/Backend/google_auth.php');
$client->addScope("email");
$client->addScope("profile");

session_start();

// Handle Google OAuth Response
if (isset($_GET['code'])) {
    $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
    $client->setAccessToken($token);

    // Get user profile data from Google
    $google_oauth = new Google_Service_Oauth2($client);
    $google_account_info = $google_oauth->userinfo->get();
    $_SESSION['email'] = $google_account_info->email;
    $_SESSION['name'] = $google_account_info->name;
    $_SESSION['picture'] = $google_account_info->picture;

    header('Location: ./google_auth.php');
    exit();
}

// If logged in
if (isset($_SESSION['email'])) {
    echo "<p>Welcome, " . $_SESSION['name'] . "!</p>";
    echo "<p>Email: " . $_SESSION['email'] . "</p>";
    echo "<img src='" . $_SESSION['picture'] . "' alt='Profile Picture'>";
    echo "<p><a href='?logout'>Logout</a></p>";

    if (isset($_GET['logout'])) {
        session_destroy();
        header('Location: ./google_auth.php');
    }
} else {
    // Google login URL
    $login_url = $client->createAuthUrl();
    echo "<p><a href='" . $login_url . "'>Login with Google</a></p>";
}
?>
