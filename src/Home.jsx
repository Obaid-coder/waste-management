import { Link } from "react-router-dom";
import './Home.css';

function Home() {
    return (
        <section className="home-container">
            {/* Navbar */}
            <nav className="navbar">
                <h1 className="logo">Eco<span>Waste</span></h1>
                <ul className="nav-links">
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/admin-login' className="btn-secondary">Admin</Link></li>
                    <li><Link to='/user-login' className="btn-primary">User Login</Link></li>
                </ul>
            </nav>

            {/* Hero Section */}
            <header className="hero">
                <div className="hero-content">
                    <h2>Smart Solutions for a <span>Cleaner Planet</span></h2>
                    <p>Streamlining waste collection and recycling for a sustainable future. Join us in making the world greener, one bin at a time.</p>
                    <div className="hero-btns">
                        <Link to='/registration' className="btn-primary">Get Started</Link>
                        <Link to='/about' className="btn-outline">Learn More</Link>
                    </div>
                </div>
            </header>

            {/* Features/Info Section */}
            <div className="features">
                <div className="feature-card">
                    <h3>Track Collection</h3>
                    <p>Real-time updates on waste pickup schedules in your area.</p>
                </div>
                <div className="feature-card">
                    <h3>Report Issues</h3>
                    <p>Easily report overflowing bins or missed collections to the admin.</p>
                </div>
                <div className="feature-card">
                    <h3>Eco Tips</h3>
                    <p>Learn how to segregate waste and reduce your carbon footprint.</p>
                </div>
            </div>
        </section>
    );
}

export default Home;