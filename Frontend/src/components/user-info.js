import React from 'react';
import { useLocation } from 'react-router-dom';

const UserInfo = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');
    const email = queryParams.get('email');
    const picture = queryParams.get('picture');

    return (
        <div>
            <h2>Informations de l'utilisateur</h2>
            <p>Nom : {name}</p>
            <p>Email : {email}</p>
            {picture && <img src={picture} alt="Profile" />}
        </div>
    );
};

export default UserInfo;
