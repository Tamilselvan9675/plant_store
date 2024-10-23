export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_ITEM = 'INCREASE_ITEM';
export const DECREASE_ITEM = 'DECREASE_ITEM';

export const addToCart = (plant) => ({ type: ADD_TO_CART, payload: plant });
export const removeFromCart = (plantId) => ({ type: REMOVE_FROM_CART, payload: plantId });
export const increaseItem = (plantId) => ({ type: INCREASE_ITEM, payload: plantId });
export const decreaseItem = (plantId) => ({ type: DECREASE_ITEM, payload: plantId });
