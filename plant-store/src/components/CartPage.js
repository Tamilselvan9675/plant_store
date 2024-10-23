import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css'; // Add styling as needed

const CartPage = ({ cartItems, updateCart }) => {
    // Calculate total price
    const totalCost = cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
    
    // Calculate total number of plants in the cart
    const totalPlants = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);

    return (
        <div className="cart-page">
            <h2>Your Shopping Cart</h2>
            <h3>Total Plants in Cart: {totalPlants}</h3> {/* Display total number of plants */}

            {cartItems.length > 0 ? (
                <>
                    <div className="cart-items">
                        {cartItems.map((item, index) => (
                            <div key={index} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price} x {item.quantity || 1}</p> {/* Display quantity */}
                                    <div className="cart-item-controls">
                                        <button className="quantity-button" onClick={() => updateCart(item.id, 1)}>+</button>
                                        <span className="quantity">{item.quantity || 1}</span>
                                        <button className="quantity-button" onClick={() => updateCart(item.id, -1)} disabled={(item.quantity || 1) <= 1}>-</button>
                                        <button className="delete-button" onClick={() => updateCart(item.id, 0)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h3>Total Cost: ${totalCost.toFixed(2)}</h3>
                        <button className="checkout-button">Checkout (Coming Soon)</button>
                    </div>
                </>
            ) : (
                <div className="empty-cart">
                    <p>Your cart is empty.</p>
                    <Link to="/products" className="continue-shopping">
                        Continue Shopping
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CartPage;
