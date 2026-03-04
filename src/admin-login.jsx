import React, { useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './AdminLogin.css';
import axios from 'axios';

function AdminLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // ... inside AdminLogin component
const handleLogin = async (e) => {
    e.preventDefault();

    try {
        const response = await axios.post('http://localhost:5000/api/admin-login', {
            email: email,
            password: password
        });

        if (response.status === 200) {
            alert("Accessing Admin Dashboard...");
            // Optionally save a token or admin data to localStorage
            localStorage.setItem('isAdminAuthenticated', 'true');
            navigate('/admin-dashboard');
        }
    } catch (error) {
        console.error("Login error:", error);
        alert(error.response?.data?.message || "Login failed. Please check your connection.");
    }
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