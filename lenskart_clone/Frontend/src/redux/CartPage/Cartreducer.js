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
      const existingItemIndex = cart.findIndex(
        (item) => item.id === product.id && item.selectedLens?.id === product.selectedLens?.id
      );

      if (existingItemIndex === -1) {
        const lensPrice = product.selectedLens ? parseFloat(product.selectedLens.price) : 0;
        const newItem = { ...product, quantity: 1, totalPrice: parseFloat(product.sale_price) + lensPrice };
        return {
          ...state,
          cart: [...cart, newItem]
        };
      } else {
        alert("Product Already Added");
      }
      return state;

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (item) => !(item.id === payload.id && item.selectedLens?.id === payload.selectedLens?.id)
        )
      };

    case INCREMENT:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === payload.id && item.selectedLens?.id === payload.selectedLens?.id) {
            const lensPrice = item.selectedLens ? parseFloat(item.selectedLens.price) : 0;
            const newQuantity = item.quantity + 1;
            return {
              ...item,
              quantity: newQuantity,
              totalPrice: newQuantity * (parseFloat(item.sale_price) + lensPrice)
            };
          }
          return item;
        })
      };

    case DECREMENT:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === payload.id && item.selectedLens?.id === payload.selectedLens?.id) {
            const lensPrice = item.selectedLens ? parseFloat(item.selectedLens.price) : 0;
            const newQuantity = item.quantity - 1;
            return newQuantity > 0
              ? {
                  ...item,
                  quantity: newQuantity,
                  totalPrice: newQuantity * (parseFloat(item.sale_price) + lensPrice)
                }
              : null;
          }
          return item;
        }).filter((item) => item !== null)
      };

    case RESET:
      return {
        ...state,
        coupon: 0,
        cart: []
      };

    default:
      return state;
  }
};
