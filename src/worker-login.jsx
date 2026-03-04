import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function WorkerLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/worker-login', { email, password });
            localStorage.setItem('worker', JSON.stringify(res.data.worker));
            navigate('/worker-dashboard');
        } catch (err) {
            alert("Invalid Worker Credentials");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <h2>Worker <span>Access</span></h2>
                <input type="email" placeholder="Worker Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login to Tasks</button>
            </form>
        </div>
    );
}

export default WorkerLogin;