import React, { useState, useEffect } from 'react';

const GoogleLoginComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Vérifiez si les informations de l'utilisateur sont présentes dans l'URL
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('email')) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        window.location.href = 'http://localhost/innovate-web-challenge-team1/Backend/google_auth.php';
    };

    const handleLogout = () => {
        // Déconnectez l'utilisateur en redirigeant vers l'URL de déconnexion
        window.location.href = 'http://localhost/innovate-web-challenge-team1/Backend/google_auth.php?logout=true';
    };

    return (
        <div>
            {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <button onClick={handleLogin}>Login with Google</button>
            )}
        </div>
    );
};

export default GoogleLoginComponent;
