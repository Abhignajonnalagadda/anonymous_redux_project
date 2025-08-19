const WISHLIST_ADD_ITEM = "wishlist/add_item"
const WISHLIST_REMOVE_ITEM = "wishlist/remove_item"

export default function wishListReducer(state=[], action) {
    switch(action.type) {
        case WISHLIST_ADD_ITEM:
            return [...state, action.payload];
        case WISHLIST_REMOVE_ITEM:
            return state.filter(item => item != action.payload);
        default:
            return state;
    }
}
export const addToWishList = (id) => {
    return {
      type: WISHLIST_ADD_ITEM,
      payload: id
    };
  };

export const removeFromWishList = id => {
    return {
        type: WISHLIST_REMOVE_ITEM,
        payload: id
    }
}