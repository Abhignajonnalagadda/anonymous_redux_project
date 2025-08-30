import { createStore, combineReducers } from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import wishListReducer from "./wishListReducer";

const reducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  wishList: wishListReducer
});

const store = createStore(reducer, window?.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
