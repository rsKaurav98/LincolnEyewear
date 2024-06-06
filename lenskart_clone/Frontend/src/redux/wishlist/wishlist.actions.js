import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, RESET } from "./wishlist.types";

export const addToWishlist = (product) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: product
  };
};

export const removeFromWishlist = (itemId, selectedLensId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: {
    itemId,
    selectedLensId
  }
});

export const WishlistReset = (id) => {
  return {
    type: RESET
  };
};
