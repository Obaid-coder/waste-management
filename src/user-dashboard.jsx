import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserDash() {
    const navigate = useNavigate();
    
    // 1. Get user data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    // 2. Define state hooks at the top level
    const [file, setFile] = useState(null);
    const [description, setDescription] = useState("");

    // 3. Protection Logic: Kick out unauthorized users
    useEffect(() => {
        if (!user) {
            alert("Unauthorized! Please login first.");
            navigate('/user-login');
        }
    }, [user, navigate]);

    // 4. Handle File Upload
    const handleUpload = async (e) => {
        e.preventDefault();
        
        if (!file) {
            alert("Please select an image first.");
            return;
        }

        const formData = new FormData();
        formData.append('image', file);
        formData.append('userId', user.id);
        formData.append('description', description);

        try {
            await axios.post('http://localhost:5000/api/upload-task', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            alert("Waste report submitted successfully!");
            // Optional: Reset form after success
            setDescription("");
            setFile(null);
        } catch (err) {
            console.error(err);
            alert("Upload failed. Check if backend is running.");
        }
    };

    // 5. Render check
    if (!user) return null;

    return (
        <div className="user-dash" style={{ padding: '20px' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h1>Welcome, {user.fullName}</h1>
                <button onClick={() => { localStorage.clear(); navigate('/user-login'); }}>Logout</button>
            </header>

            <div style={{ marginTop: '30px', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
                <form onSubmit={handleUpload}>
                    <h3>📸 Report Waste</h3>
                    <p>Help us keep the city clean by uploading a photo of the waste.</p>
                    
                    <div style={{ marginBottom: '15px' }}>
                        <label>Select Photo: </label>
                        <input 
                            type="file" 
                            accept="image/*"
                            onChange={(e) => setFile(e.target.files[0])} 
                            required 
                        />
                    </div>

                    <div style={{ marginBottom: '15px' }}>
                        <textarea 
                            style={{ width: '100%', minHeight: '80px' }}
                            placeholder="Enter location details or waste type (e.g., Plastic waste near Central Park)..." 
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" style={{ backgroundColor: '#2ecc71', color: 'white', border: 'none', padding: '10px 20px', cursor: 'pointer' }}>
                        Upload to Admin
                    </button>
                </form>
            </div>
        </div>
    );
}

export default UserDash;