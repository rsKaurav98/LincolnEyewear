// wishlist.reducer.js

import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, RESET } from "./wishlist.types";

const wishlistInitialState = {
  loading: false,
  error: false,
  wishlist: []
};

export const wishlistReducer = (state = wishlistInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_WISHLIST: {
      const { wishlist } = state;
      const { id, selectedLens } = payload;

      // Check if the item is already in the wishlist
      const existingItemIndex = wishlist.findIndex(item => item.id === id && item.selectedLens?.id === payload.selectedLens?.id);

      if (existingItemIndex === -1) {
        // If not, add it to the wishlist
        const newItem = {
          ...payload
        };
        return {
          ...state,
          wishlist: [...wishlist, newItem]
        };
      } else {
        // If yes, do not add duplicate items
        alert('Product with this lens is already in the wishlist.');
        return state;
      }
    }

    case REMOVE_FROM_WISHLIST: {
      const { itemId, selectedLensId } = payload;

      return {
        ...state,
        wishlist: state.wishlist.filter(item => !(item.id === itemId && item.selectedLens?.id === selectedLensId))
      };
    }

    case RESET: {
      return {
        ...state,
        wishlist: []
      };
    }

    default: {
      return state;
    }
  }
};
