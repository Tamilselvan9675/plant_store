import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = ({ products, updateCart }) => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [isAdded, setIsAdded] = useState(false); // Track if the item is added

    if (!product) {
        return <h2>Product not found!</h2>;
    }

    const handleAddToCart = () => {
        updateCart(product.id, 1); // Increment quantity by 1
        setIsAdded(true); // Disable the button after adding
    };

    return (
        <div className="product-detail">
            <img src={product.image} alt={product.name} style={{ width: '300px', height: '300px' }} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button onClick={handleAddToCart} disabled={isAdded}>
                {isAdded ? 'Added to Cart' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default ProductDetail;
