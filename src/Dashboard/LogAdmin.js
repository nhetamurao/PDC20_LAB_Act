import React, { useState } from 'react';
import AdminPanel from './AdminPanel';
import './LogAdmin.css';
import { useNavigate } from 'react-router-dom'; // import navigation methods

function LogAdmin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('user');
    const [user, setUser] = useState(null);
    const [loginAttempts, setLoginAttempts] = useState(0); // No. of login attempts
    const [errorMessage, setErrorMessage] = useState(''); // String for error message

    const navigate = useNavigate(); // Hook to navigate between pages

    const handleLogin = () => {
        const validAdminCredentials = {
            user: 'user123',
            password: 'pass123'
        };

        const isAdmin = accountType === 'admin';
        
        if (username === validAdminCredentials.user && password === validAdminCredentials.password) {
            setUser({ name: username, isAdmin });
        } else {
            setLoginAttempts(prevAttempts => {
                const newAttempts = prevAttempts + 1;
                setErrorMessage('Invalid Credentials');
                if (newAttempts >= 3) {
                    navigate('/auth-error');
                }
                return newAttempts;
            });
        }
    };

    const handleSignUp = () => {
        // Implement sign-up logic here
        alert('Sign Up functionality not implemented.');
    };

    return (
        <div>
            {user ? (
                <AdminPanel user={user} />
            ) : (
                <div className="container">
                    <h1>Log In</h1>
                    <div>
                        <label>Username: </label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Password: </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <label>Account Type: </label>
                        <select
                            value={accountType}
                            onChange={(e) => setAccountType(e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleSignUp}>Sign Up</button>
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    {loginAttempts > 0 && (
                        <p style={{ color: 'red' }}>Login Attempts: {loginAttempts}/3</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default LogAdmin;
