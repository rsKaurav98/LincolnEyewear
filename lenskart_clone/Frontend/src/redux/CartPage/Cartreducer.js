import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT,
  DECREMENT,
  RESET,
  applyCoupon
} from "./actionType";

let initialState = {
  loading: false,
  error: false,
  cart: [],
  coupon: 0
};

export const CartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case applyCoupon:
      return {
        ...state,
        coupon: payload
      };

    case ADD_TO_CART:
      const { cart } = state;
      const product = payload;
      const existingItem = cart.findIndex((item) => item.id === product.id);
      if (existingItem === -1) {
        const newItem = { ...product, quantity: 1 };
        return {
          ...state,
          cart: [...cart, newItem]
        };
      }
      alert("Product Already Added");
      return state;

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload)
      };

    case INCREMENT:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      };

    case DECREMENT:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === payload) {
            const newQuantity = item.quantity - 1;
            return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
          }
          return item;
        }).filter(item => item !== null)
      };

    case RESET:
      return {
        ...state,
        coupon:0,
        cart: []
      };

    default:
      return state;
  }
};
