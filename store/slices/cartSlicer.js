import { createSlice, createSelector } from "@reduxjs/toolkit";

const findItemIndex = (state, action) => {
  return state.list.findIndex(
    (item) => item.productId === action.payload.productId
  );
};

const slice = createSlice({
  name: "cart",
  initialState: {
    isLoading: true,
    error: null,
    list: []
  },
  reducers: {
    loadCartItems: (state, action) => {
      state.list = action.payload.products;
      state.isLoading = false;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    addItemToCart: (state, action) => {
      const existingItem = findItemIndex(state, action);
      if (existingItem !== -1) {
        state.list[existingItem].quantity += 1;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      const existingItem = findItemIndex(state, action);
      state.list.splice(existingItem, 1);
    },
    increaseCartQuantity: (state, action) => {
      const existingItem = findItemIndex(state, action);
      state.list[existingItem].quantity += 1;
    },
    decreaseCartQuantity: (state, action) => {
      const existingItem = findItemIndex(state, action);
      state.list[existingItem].quantity -= 1;
      if (state.list[existingItem].quantity === 0) {
        state.list.splice(existingItem, 1);
      }
    }
  }
});

export const getAllCartItems = createSelector(
  ({ cart, product }) => {
    return cart.list.map((cartItem) => {
      return {
        ...cartItem,
        ...product.products.find((p) => p.id === cartItem.productId)
      };
    });
  },
  (items) => items
);

export const {
  loadCartItems,
  setIsLoading,
  setError,
  addItemToCart,
  removeItemFromCart,
  increaseCartQuantity,
  decreaseCartQuantity
} = slice.actions;

export default slice.reducer;
