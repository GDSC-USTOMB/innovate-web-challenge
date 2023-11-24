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

// Function to insert or update user data in the database
function saveUserData($email, $userName, $picture, $conn) {
    // Default values for new users
    $defaultPassword = "random"; // Default password
    $defaultPosition = "member"; // Default position
    $defaultIsOrganizer = 0;     // Default isOrganizer flag

    // Check if user already exists
    $checkQuery = "SELECT * FROM users WHERE Email = ?";
    $stmt = $conn->prepare($checkQuery);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 0) {
        // User doesn't exist, so insert new record
        $insertQuery = "INSERT INTO users (UserName, Email, Picture, PASSWORD, position, IsOrganizer) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($insertQuery);
        $stmt->bind_param("sssssi", $userName, $email, $picture, $defaultPassword, $defaultPosition, $defaultIsOrganizer);
    } else {
        // User exists, so update existing record
        $updateQuery = "UPDATE users SET UserName = ?, Picture = ? WHERE Email = ?";
        $stmt = $conn->prepare($updateQuery);
        $stmt->bind_param("sss", $userName, $picture, $email);
    }

    $stmt->execute();
}

// Handle Google OAuth Response
if (isset($_GET['code'])) {
    $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
    $client->setAccessToken($token);

    // Get user profile data from Google
    $google_oauth = new Google_Service_Oauth2($client);
    $google_account_info = $google_oauth->userinfo->get();
    $_SESSION['Email'] = $google_account_info->email;
    $_SESSION['UserName'] = $google_account_info->name;
    $_SESSION['Picture'] = $google_account_info->picture;

    // Include database connection file
    include 'db_connect.php';

    // Save or update user data in database
    saveUserData($_SESSION['Email'], $_SESSION['UserName'], $_SESSION['Picture'], $conn);

    // Redirect to the React application with user information
    header('Location: http://localhost:3000/user-info?name=' . urlencode($_SESSION['UserName']) . '&email=' . urlencode($_SESSION['Email']) . '&picture=' . urlencode($_SESSION['Picture']));
    exit();
}

// Logout and session destroy
if (isset($_GET['logout'])) {
    session_destroy();
    // Redirigez vers votre application React après la déconnexion
    header('Location: http://localhost:3000'); 
    exit();
}

// If not logged in, create a Google login URL
if (isset($_SESSION['Email'])) {
    header('Location: http://localhost:3000/user-info?name=' . urlencode($_SESSION['UserName']) . '&email=' . urlencode($_SESSION['Email']));
    exit();
} else {
    // Google login URL
    $login_url = $client->createAuthUrl();
    
    // Redirection automatique vers la connexion Google
    header('Location: ' . $login_url);
    exit();
}
?>
