import React from 'react';
import { Link } from 'react-router-dom';

const ProductListing = ({ products, updateCart }) => {
    const indoorPlants = products.filter(product => product.category === 'Indoor');
    const lowMaintenancePlants = products.filter(product => product.category === 'Low Maintenance');
    const airPurifyingPlants = products.filter(product => product.category === 'Air Purifying');

    return (
        <div>
            <h2>Indoor Plants</h2>
            <div className="product-grid">
                {indoorPlants.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => updateCart(product.id, 1)}>Add to Cart</button> {/* Use updateCart here */}
                        <Link to={`/product/${product.id}`}>View Details</Link>
                    </div>
                ))}
            </div>

            <h2>Low Maintenance Plants</h2>
            <div className="product-grid">
                {lowMaintenancePlants.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => updateCart(product.id, 1)}>Add to Cart</button> {/* Use updateCart here */}
                        <Link to={`/product/${product.id}`}>View Details</Link>
                    </div>
                ))}
            </div>

            <h2>Air Purifying Plants</h2>
            <div className="product-grid">
                {airPurifyingPlants.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => updateCart(product.id, 1)}>Add to Cart</button> {/* Use updateCart here */}
                        <Link to={`/product/${product.id}`}>View Details</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductListing;
