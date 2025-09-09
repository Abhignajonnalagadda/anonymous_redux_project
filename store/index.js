import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlicer";
import cartReducer from "./slices/cartSlicer";
import wishListReducer from "./slices/wishListSlicer";
import { api } from "./middlewares/api";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
    wishList: wishListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(api)
});

export default store;