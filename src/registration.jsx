import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Registration.css';
import axios from 'axios';

function Registration() {
    const navigate = useNavigate();
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

    // ... inside the handleRegister function
const handleRegister = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        // 2. Send data to Node.js backend
        const response = await axios.post('http://localhost:5000/api/register', {
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            password: formData.password // Note: In production, hash this!
        });

        if (response.status === 201) {
            alert("Account created successfully! Welcome to EcoWaste.");
            navigate('/user-login'); // Redirect to login after success
        }
    } catch (error) {
        console.error("Registration error:", error);
        alert(error.response?.data?.message || "Something went wrong. Please try again.");
    }
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