<?php
// Include the Google API client library
require_once __DIR__ . '/vendor/autoload.php';

// Create a new Google Client instance
$client = new Google_Client();

// Set the Google Client ID and Secret. Replace these with your own values.
$client->setClientId('182706361187-a0fneuovmpqo83if9cqlbc1os1lr5kis.apps.googleusercontent.com');
$client->setClientSecret('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');

// Set the Redirect URI, where Google will send the user after authentication
$client->setRedirectUri('http://localhost/innovate-web-challenge-team1/Backend/google_auth.php');

// Add the required scopes for accessing user's email and profile information
$client->addScope("email");
$client->addScope("profile");

// Start a PHP session
session_start();

// Function to save or update user data in the database
function saveUserData($email, $userName, $picture, $conn) {
    // Default values for new users
    $defaultPassword = "random";
    $defaultPosition = "member";
    $defaultIsOrganizer = 0;

    // Check if the user already exists in the database
    $checkQuery = "SELECT * FROM users WHERE Email = ?";
    $stmt = $conn->prepare($checkQuery);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 0) {
        // User doesn't exist, so insert a new record
        $insertQuery = "INSERT INTO users (UserName, Email, Picture, PASSWORD, position, IsOrganizer) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($insertQuery);
        $stmt->bind_param("sssssi", $userName, $email, $picture, $defaultPassword, $defaultPosition, $defaultIsOrganizer);
    } else {
        // User exists, so update the existing record
        $updateQuery = "UPDATE users SET UserName = ?, Picture = ? WHERE Email = ?";
        $stmt = $conn->prepare($updateQuery);
        $stmt->bind_param("sss", $userName, $picture, $email);
    }

    // Execute the database query
    $stmt->execute();
}

// Check if the 'code' parameter is present in the URL (after Google authentication)
if (isset($_GET['code'])) {
    // Exchange the authorization code for an access token
    $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
    $client->setAccessToken($token);

    // Create a Google OAuth service instance
    $google_oauth = new Google_Service_Oauth2($client);

    // Get user profile data from Google
    $google_account_info = $google_oauth->userinfo->get();

    // Store user information in PHP session
    $_SESSION['Email'] = $google_account_info->email;
    $_SESSION['UserName'] = $google_account_info->name;
    $_SESSION['Picture'] = $google_account_info->picture;

    // Include the database connection file
    include 'db_connect.php';

    // Save or update user data in the database
    saveUserData($_SESSION['Email'], $_SESSION['UserName'], $_SESSION['Picture'], $conn);

    // Redirect to the React application with user information
    header('Location: http://localhost:3000/user-info?name=' . urlencode($_SESSION['UserName']) . '&email=' . urlencode($_SESSION['Email']) . '&picture=' . urlencode($_SESSION['Picture']));
    exit();
}

// Check if the 'logout' parameter is present in the URL
if (isset($_GET['logout'])) {
    // Destroy the PHP session (log out)
    session_destroy();

    // Redirect to the main page of your React application after logout
    header('Location: http://localhost:3000');
    exit();
}

// If the user is already logged in, redirect to the user information page
if (isset($_SESSION['Email'])) {
    header('Location: http://localhost:3000/user-info?name=' . urlencode($_SESSION['UserName']) . '&email=' . urlencode($_SESSION['Email']));
    exit();
} else {
    // If not logged in, create a Google login URL and redirect to it
    $login_url = $client->createAuthUrl();

    // Redirect to the Google login page
    header('Location: ' . $login_url);
    exit();
}
?>
