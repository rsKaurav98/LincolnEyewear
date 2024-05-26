import { PLACED_ORDER, REMOVE_ORDER } from "./order.types";

const orderInitalState = {
  loading: false,
  error: false,
  order: [],
};

export const orderReducer = (state = orderInitalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PLACED_ORDER: {
      return {
        ...state,
        order: [...state.order, payload],
      };
    }
    case REMOVE_ORDER: {
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload),
      };
    }
    default: {
      return state;
    }
  }
};
