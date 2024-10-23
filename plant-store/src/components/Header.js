import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Add your styles here

const Header = ({ cartItems }) => {
    return (
        <header className="header">
            <h1>Thamizh Plant Store</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart ({cartItems.length})</Link>
            </nav>
        </header>
    );
};

export default Header;
