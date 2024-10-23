import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseItem, decreaseItem, removeFromCart } from '../redux/actions';

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);
  const totalCost = cart.reduce((sum, plant) => sum + plant.price * plant.quantity, 0);
  const dispatch = useDispatch();

  const handleIncrease = (id) => {
    dispatch(increaseItem(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseItem(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cart.map(plant => (
          <li key={plant.id}>
            <img src={plant.img} alt={plant.name} />
            <p>{plant.name}</p>
            <p>${plant.price}</p>
            <p>Quantity: {plant.quantity}</p>
            <button onClick={() => handleIncrease(plant.id)}>+</button>
            <button onClick={() => handleDecrease(plant.id)}>-</button>
            <button onClick={() => handleRemove(plant.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${totalCost}</h3>
      <button>Coming Soon</button>
      <button>Continue Shopping</button>
    </div>
  );
};

export default ShoppingCart;
