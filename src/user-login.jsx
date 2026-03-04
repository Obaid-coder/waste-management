import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './UserLogin.css';

function UserLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/user-login', { email, password });
        
        if (response.data.success) {
            // Store the user data in the browser
            localStorage.setItem('user', JSON.stringify(response.data.user));
            
            // Navigate to dashboard
            navigate('/user-dashboard'); 
        }
    } catch (error) {
        alert(error.response?.data?.message || "Login failed");
    }
};

    return (
        <div className="user-login-container">
            <div className="login-card">
                <div className="login-header">
                    <div className="user-icon">🌱</div>
                    <h2>Welcome <span>Back</span></h2>
                    <p>Log in to manage your waste collection and track impact.</p>
                </div>

                <form onSubmit={handleLogin} className="login-form">
                    <div className="input-group">
                        <label>Email Address</label>
                        <input 
                            type="email" 
                            placeholder="yourname@email.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="form-actions">
                        <label className="remember-me">
                            <input type="checkbox" /> Remember me
                        </label>
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>

                    <button type="submit" className="login-btn">Login</button>
                </form>

                <div className="divider"><span>OR</span></div>

                <div className="social-login">
                    <button className="social-btn google">Continue with Google</button>
                </div>

                <div className="login-footer">
                    <p>Don't have an account? <Link to="/registration">Sign Up</Link></p>
                    <Link to="/" className="back-home">← Back to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;