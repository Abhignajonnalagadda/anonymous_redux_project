import { produce } from "immer";
const CART_ADD_ITEM = "cart/add_item";
const CART_REMOVE_ITEM = "cart/remove_item";
const CART_INCREASE_COUNT = "cart/increase_count";
const CART_DECREASE_COUNT = "cart/decrease_count";

export default function cartReducer(originalState = [], action) {
  return produce(originalState, (state) => {
    const existingItem = state.findIndex(
      (item) => item.id === action.payload.id || item.id === action.payload
    );
    switch (action.type) {
      case CART_ADD_ITEM: {
        if (existingItem !== -1) {
          state[existingItem].quantity += 1;
          return state;
        } else {
          state.push({ ...action.payload, quantity: 1 });
        }
        break;
      }
      case CART_REMOVE_ITEM:
        state.splice(existingItem, 1);
        break;

      case CART_INCREASE_COUNT:
        state[existingItem].quantity += 1;
        break;
      case CART_DECREASE_COUNT:
        state[existingItem].quantity -= 1;
        if (state[existingItem].quantity === 0) {
          state.splice(existingItem, 1);
        }
        break;
    }
    return state;
  });
}

export function addItemToCart(productData) {
  return { type: CART_ADD_ITEM, payload: productData };
}

export function removeItemFromCart(id) {
  return { type: CART_REMOVE_ITEM, payload: id };
}

export function increaseCartQuantity(id) {
  return { type: CART_INCREASE_COUNT, payload: id };
}

export function decreaseCartQuantity(id) {
  return { type: CART_DECREASE_COUNT, payload: id };
}
