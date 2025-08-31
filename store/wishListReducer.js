import { produce } from "immer";
const WISHLIST_ADD_ITEM = "wishlist/add_item";
const WISHLIST_REMOVE_ITEM = "wishlist/remove_item";

export default function wishListReducer(originalState = [], action) {
  return produce(originalState, (state) => {
    switch (action.type) {
      case WISHLIST_ADD_ITEM:
        state.push(action.payload);
        break;
      case WISHLIST_REMOVE_ITEM:
        state.splice(
          state.findIndex((item) => item.id === action.payload),
          1
        );
        break;
      default:
        return state;
    }
    return state;
  });
}
export const addToWishList = (id) => {
  return {
    type: WISHLIST_ADD_ITEM,
    payload: id
  };
};

export const removeFromWishList = (id) => {
  return {
    type: WISHLIST_REMOVE_ITEM,
    payload: id
  };
};
