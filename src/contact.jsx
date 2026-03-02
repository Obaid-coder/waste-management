import React from 'react';
import './Contact.css';

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message sent! We will get back to you soon.");
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>Get in <span>Touch</span></h1>
                <p>Have a question about waste collection? Our team is here to help.</p>
            </div>

            <div className="contact-content">
                {/* Contact Info Side */}
                <div className="contact-info">
                    <div className="info-item">
                        <h3>📍 Location</h3>
                        <p>123 Eco Street, Green City, 400001</p>
                    </div>
                    <div className="info-item">
                        <h3>📞 Phone</h3>
                        <p>+1 (555) 123-4567</p>
                    </div>
                    <div className="info-item">
                        <h3>✉️ Email</h3>
                        <p>support@ecowaste.com</p>
                    </div>
                </div>

                {/* Contact Form Side */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input type="text" placeholder="Enter your name" required />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="email@example.com" required />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea rows="5" placeholder="How can we help you?" required></textarea>
                    </div>
                    <button type="submit" className="send-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;