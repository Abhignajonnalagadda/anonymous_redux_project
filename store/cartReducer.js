const CART_ADD_ITEM = "cart/add_item";
const CART_REMOVE_ITEM = "cart/remove_item";
const CART_INCREASE_COUNT = "cart/increase_count";
const CART_DECREASE_COUNT = "cart/decrease_count"

export default function cartReducer(state = [], action) {
    switch (action.type) {
      case CART_ADD_ITEM: {
        const existingItem = state.find(item => item.id === action.payload);
        if (existingItem) {
          // If item exists, just increase its quantity
          return state.map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...state, { id: action.payload, quantity: 1 }];
      }
  
      case CART_REMOVE_ITEM:
        return state.filter(item => item.id !== action.payload);
  
      case CART_INCREASE_COUNT:
        return state.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
  
      case CART_DECREASE_COUNT:
        return state
          .map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0);
  
      default:
        return state;
    }
  }
  

export function addItemToCart(id){
    return {type: CART_ADD_ITEM, payload: id}
}

export function removeItemFromCart(id) {
    return {type: CART_REMOVE_ITEM, payload: id}
}

export function increaseCartQuantity(id) {
    return {type: CART_INCREASE_COUNT, payload: id}
} 

export function decreaseCartQuantity(id) {
    return {type: CART_DECREASE_COUNT, payload: id}
} 