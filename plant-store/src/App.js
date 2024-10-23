import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import CartPage from './components/CartPage';

// Product images
import aloe from './assets/products/aloe.jpg';
import spider from './assets/products/spider.jpg';
import pothos from './assets/products/pothos.jpg';
import snake from './assets/products/snake.jpg';
import fiddle from './assets/products/fiddle.jpg';
import zz from './assets/products/zz.jpg';

const App = () => {
    const [products] = useState([
        { id: 1, name: 'Aloe Vera', price: 15, image: aloe, description: 'A soothing houseplant.', category: 'Air Purifying' },
        { id: 2, name: 'Spider Plant', price: 10, image: spider, description: 'Easy to care for.', category: 'Low Maintenance' },
        { id: 3, name: 'Pothos', price: 12, image: pothos, description: 'A great air purifier.', category: 'Air Purifying' },
        { id: 4, name: 'Snake Plant', price: 20, image: snake, description: 'Hard to kill.', category: 'Low Maintenance' },
        { id: 5, name: 'Fiddle Leaf Fig', price: 30, image: fiddle, description: 'A trendy choice.', category: 'Indoor' },
        { id: 6, name: 'ZZ Plant', price: 25, image: zz, description: 'Very low maintenance.', category: 'Low Maintenance' },
    ]);

    const [cartItems, setCartItems] = useState([]);

    // Function to update cart items
    const updateCart = (id, change) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === id);

            if (change === 0) {
                // Delete item
                return prevItems.filter(item => item.id !== id);
            }

            if (existingItem) {
                // Update quantity
                const newQuantity = existingItem.quantity + change;
                return prevItems.map(item => 
                    item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
                );
            }

            // If item doesn't exist and change is 1, add to cart
            return [...prevItems, { id, quantity: 1, ...products.find(p => p.id === id) }];
        });
    };

    return (
        <Router>
            <Header cartItems={cartItems} /> {/* Include Header */}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/products" element={<ProductListing products={products} updateCart={updateCart} />} />
                <Route path="/product/:id" element={<ProductDetail products={products} updateCart={updateCart} />} />
                <Route path="/cart" element={<CartPage cartItems={cartItems} updateCart={updateCart} />} />
            </Routes>
        </Router>
    );
};

export default App;
