import React, { useState, useEffect } from 'react';

const UsersDisplay = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost/innovate-web-challenge-team1/Backend/api.php')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setError(error);
                setIsLoading(false);
            });
    }, []);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading users!</p>;

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.UserID}>{user.UserName} - {user.Email}</li> 
                ))}
            </ul>
        </div>
    );
};

export default UsersDisplay;
