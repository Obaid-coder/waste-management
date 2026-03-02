import React from 'react';
import './About.css';

function About() {
    return (
        <div className="about-container">
            {/* Header Section */}
            <header className="about-header">
                <h1>About <span>EcoWaste</span></h1>
                <p className="subtitle">We are on a mission to digitize waste management for a sustainable tomorrow.</p>
            </header>

            {/* Mission Section */}
            <div className="mission-section">
                <div className="mission-text">
                    <h2>Our Vision</h2>
                    <p>
                        Founded in 2024, EcoWaste was created to bridge the gap between 
                        citizens and waste management authorities. We believe that technology 
                        is the key to solving the global waste crisis. By providing real-time 
                        tracking and easy reporting tools, we make city cleaning more efficient.
                    </p>
                </div>
                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>500+</h3>
                        <p>Bins Monitored</p>
                    </div>
                    <div className="stat-card">
                        <h3>10 Tons</h3>
                        <p>Waste Recycled</p>
                    </div>
                    <div className="stat-card">
                        <h3>1,200+</h3>
                        <p>Happy Users</p>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <section className="how-it-works">
                <h2 className="section-title">How It Works</h2>
                <div className="steps-container">
                    <div className="step">
                        <div className="step-icon">📱</div>
                        <h3>Report</h3>
                        <p>Users report waste collection needs or full bins via our app.</p>
                    </div>
                    <div className="step">
                        <div className="step-icon">🚚</div>
                        <h3>Assign</h3>
                        <p>Admins assign the closest waste collection vehicle in real-time.</p>
                    </div>
                    <div className="step">
                        <div className="step-icon">♻️</div>
                        <h3>Dispose</h3>
                        <p>Waste is sorted and disposed of using eco-friendly methods.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;