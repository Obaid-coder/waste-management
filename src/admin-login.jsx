import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminLogin.css';

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Logic for Admin Authentication goes here
        console.log("Admin login attempt:", email);
        alert("Accessing Admin Dashboard...");
    };

    return (
        <div className="admin-login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="admin-icon">🛡️</div>
                    <h2>Admin <span>Portal</span></h2>
                    <p>Enter your credentials to manage the waste network.</p>
                </div>

                <form onSubmit={handleLogin} className="login-form">
                    <div className="input-group">
                        <label>Admin ID / Email</label>
                        <input 
                            type="email" 
                            placeholder="admin@ecowaste.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="input-group">
                        <label>Secret Key / Password</label>
                        <input 
                            type="password" 
                            placeholder="••••••••" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="form-options">
                        <label><input type="checkbox" /> Remember Session</label>
                        <Link to="/forgot-password">Forgot Key?</Link>
                    </div>

                    <button type="submit" className="login-btn">Secure Login</button>
                </form>

                <div className="login-footer">
                    <p>Not an Admin? <Link to="/user-login">Go to User Login</Link></p>
                    <Link to="/" className="back-home">← Back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;