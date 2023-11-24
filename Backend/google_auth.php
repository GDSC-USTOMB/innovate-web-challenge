<?php
require_once __DIR__ . '/vendor/autoload.php';

// Initialize Google Client
$client = new Google_Client();
$client->setClientId('182706361187-a0fneuovmpqo83if9cqlbc1os1lr5kis.apps.googleusercontent.com'); // Replace with your Google Client ID
$client->setClientSecret('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'); // Replace with your Google Client Secret
$client->setRedirectUri('http://localhost/innovate-web-challenge-team1/Backend/google_auth.php');
$client->addScope("Email");
$client->addScope("profile");

session_start();

// Function to insert or update user data in the database
function saveUserData($Email, $UserName, $Picture, $conn) {
    // Check if user already exists
    $checkQuery = "SELECT * FROM users WHERE Email = ?";
    $stmt = $conn->prepare($checkQuery);
    $stmt->bind_param("s", $Email);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows == 0) {
        // User doesn't exist, so insert new record
        $insertQuery = "INSERT INTO users (UserName, Email, Picture) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($insertQuery);
        $stmt->bind_param("sss", $UserName, $Email, $Picture);
    } else {
        // User exists, so update existing record
        $updateQuery = "UPDATE users SET UserName = ?, Picture = ? WHERE Email = ?";
        $stmt = $conn->prepare($updateQuery);
        $stmt->bind_param("sss", $UserName, $Picture, $Email);
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
    $_SESSION['Email'] = $google_account_info->Email;
    $_SESSION['UserName'] = $google_account_info->UserName;
    $_SESSION['Picture'] = $google_account_info->Picture;

    // Include database connection file
    include 'db_connect.php';

    // Save or update user data in database
    saveUserData($_SESSION['Email'], $_SESSION['UserName'], $_SESSION['Picture'], $conn);

    header('Location: ./google_auth.php');
    exit();
}

// Logout and session destroy
if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: ./google_auth.php');
    exit();
}

// If logged in
if (isset($_SESSION['Email'])) {
    echo "<p>Welcome, " . $_SESSION['UserName'] . "!</p>";
    echo "<p>Email: " . $_SESSION['Email'] . "</p>";
    echo "<img src='" . $_SESSION['Picture'] . "' alt='Profile Picture'>";
    echo "<p><a href='?logout'>Logout</a></p>";
} else {
    // Google login URL
    $login_url = $client->createAuthUrl();
    echo "<p><a href='" . $login_url . "'>Login with Google</a></p>";
}
?>
