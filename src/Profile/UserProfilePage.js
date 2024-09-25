import React, { useState } from 'react';
import Profile from './Profile';
import Navigation from './Navigation';
import Form from './Form';
import './UserProfilePage.css';

function UserProfilePage() {
    const [userData, setUserData] = useState({
        name: 'Juan Dela Cruz',
        email: 'juan@gmail.com',
        username: 'juandelacruz',
    });

    const handleUpdate = (updatedInfo) => {
        setUserData((prevState) => ({
            ...prevState,
            ...updatedInfo,
        }));
    };

    return (
        <div className="user-profile-page">
            <Navigation />
            <div className="profile-container">
                <div className="card">
                    <Profile user={userData} />
                </div>
                <div className="card">
                    <Form user={userData} onUpdate={handleUpdate} />
                </div>
            </div>
        </div>
    );
}

export default UserProfilePage;
