import { createSlice } from "@reduxjs/toolkit";

const findItemIndex = (state, action) => {
  return state.findIndex((item) => item.productId === action.payload.productId);
};

const slice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      const existingItem = findItemIndex(state, action);
      if (existingItem !== -1) {
        state[existingItem].quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItemFromCart: (state, action) => {
      const existingItem = findItemIndex(state, action);
      state.splice(existingItem, 1);
    },
    increaseCartQuantity: (state, action) => {
      const existingItem = findItemIndex(state, action);
      state[existingItem].quantity += 1;
    },
    decreaseCartQuantity: (state, action) => {
      const existingItem = findItemIndex(state, action);
      state[existingItem].quantity -= 1;
      if (state[existingItem].quantity === 0) {
        state.splice(existingItem, 1);
      }
    }
  }
});

export const {
  addItemToCart,
  removeItemFromCart,
  increaseCartQuantity,
  decreaseCartQuantity
} = slice.actions;

export default slice.reducer;
