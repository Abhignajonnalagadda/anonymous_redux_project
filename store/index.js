import { createStore, combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer, {
  addItemToCart,
  removeItemFromCart,
  increaseCartQuantity,
  decreaseCartQuantity,
} from "./cartReducer";
import wishListReducer, {
  addToWishList,
  removeFromWishList,
} from "./wishListReducer";

const reducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  wishList: wishListReducer,
});

const store = createStore(reducer, window?.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());
store.dispatch(addToWishList(1));
store.dispatch(addToWishList(10));
store.dispatch(removeFromWishList(1));
store.dispatch(addItemToCart(2));
store.dispatch(addItemToCart(20));
store.dispatch(addItemToCart(30));
store.dispatch(removeItemFromCart(20));
store.dispatch(increaseCartQuantity(2));
store.dispatch(increaseCartQuantity(2));
store.dispatch(increaseCartQuantity(2));
store.dispatch(decreaseCartQuantity(2));
console.log(store.getState());

export default store;
