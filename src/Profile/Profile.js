import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css'; // Importing a CSS file for styles

function Profile({ user: { name, email, username } }) {
    return (
        <div className="profile-card">
            <h2 className="profile-name">{name}</h2>
            <p className="profile-email">{email}</p>
            <p className="profile-username">@{username}</p>
        </div>
    );
}

Profile.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
    }).isRequired,
};

export default Profile;