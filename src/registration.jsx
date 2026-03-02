import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

function Registration() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if(formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Registering user:", formData);
        alert("Account created successfully! Welcome to EcoWaste.");
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-left">
                    <h2>Join the <span>Green</span> Revolution</h2>
                    <p>Create an account to schedule pickups, track recycling progress, and help keep your city clean.</p>
                    <div className="register-art">🌳</div>
                </div>

                <div className="register-right">
                    <form onSubmit={handleRegister} className="register-form">
                        <h3>Create Account</h3>
                        
                        <div className="input-row">
                            <div className="input-group">
                                <label>Full Name</label>
                                <input type="text" name="fullName" placeholder="John Doe" onChange={handleChange} required />
                            </div>
                            <div className="input-group">
                                <label>Phone</label>
                                <input type="tel" name="phone" placeholder="+1 234 567" onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Email Address</label>
                            <input type="email" name="email" placeholder="john@example.com" onChange={handleChange} required />
                        </div>

                        <div className="input-group">
                            <label>Pickup Address</label>
                            <input type="text" name="address" placeholder="Street, Apartment, City" onChange={handleChange} required />
                        </div>

                        <div className="input-row">
                            <div className="input-group">
                                <label>Password</label>
                                <input type="password" name="password" placeholder="••••••••" onChange={handleChange} required />
                            </div>
                            <div className="input-group">
                                <label>Confirm</label>
                                <input type="password" name="confirmPassword" placeholder="••••••••" onChange={handleChange} required />
                            </div>
                        </div>

                        <button type="submit" className="reg-btn">Start Contributing</button>
                        
                        <p className="login-link">
                            Already have an account? <Link to="/user-login">Log In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registration;