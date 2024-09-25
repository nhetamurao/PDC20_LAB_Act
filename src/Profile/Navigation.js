import React from 'react';
import './Navigation.css'; // Importing a CSS file for styles

function Navigation() {
    return (
        <nav className="navigation">
            <ul className="nav-list">
                <li className="nav-item">Profile</li>
                <li className="nav-item">Settings</li>
                <li className="nav-item">Logout</li>
            </ul>
        </nav>
    );
}

export default Navigation;