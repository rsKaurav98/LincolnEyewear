import { PLACED_ORDER, REMOVE_ORDER } from "./order.types";

export const addToOrder = (product) => {
  return {
    type: PLACED_ORDER,
    payload: product,
  };
};

export const removeFromOrders = (item) => {
  return {
    type: REMOVE_ORDER,
    payload: item,
  };
};
