import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';  // Assuming you have the CSS already linked

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1>Welcome to Thamizh Plant Store</h1>
            <p>Thamizh Plant Store is your go-to destination for a diverse selection of high-quality indoor and outdoor plants. We offer a range of categories, including air-purifying and low-maintenance options, catering to all plant lovers. Our commitment to exceptional customer service ensures you receive the guidance you need to create a vibrant and healthy environment. Discover the joy of greenery and find the perfect plant for your space at Thamizh Plant Store!</p>
            {/* Link to the product listing page */}
            <Link to="/products">
                <button className="get-started-button">Get Started</button>
            </Link>
        </div>
    );
};

export default LandingPage;
