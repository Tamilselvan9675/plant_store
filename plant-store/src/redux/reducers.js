import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_ITEM, DECREASE_ITEM } from './actions';

const initialState = {
  cart: [],
  totalItems: 0,
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const plantExists = state.cart.find(item => item.id === action.payload.id);
      if (plantExists) return state;

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }],
        totalItems: state.totalItems + 1
      };
    
    case REMOVE_FROM_CART:
      const updatedCart = state.cart.filter(item => item.id !== action.payload);
      const totalItemsAfterRemove = state.cart.find(item => item.id === action.payload).quantity;
      return {
        ...state,
        cart: updatedCart,
        totalItems: state.totalItems - totalItemsAfterRemove,
      };

    case INCREASE_ITEM:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
        totalItems: state.totalItems + 1
      };

    case DECREASE_ITEM:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        ),
        totalItems: state.totalItems - 1
      };

    default:
      return state;
  }
}

export default cartReducer;
