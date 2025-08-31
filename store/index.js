import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlicer";
import cartReducer from "./slices/cartSlicer";
import wishListReducer from "./slices/wishListSlicer";
import {logger} from "./middlewares/logger";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    wishList: wishListReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
