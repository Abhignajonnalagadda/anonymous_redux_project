import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "wishLIst",
    initialState: [],
    reducers: {
        addToWishList: (state, action) => {
            state.push(action.payload);
        },
        removeFromWishList: (state, action) => {
            state.splice(state.findIndex((item) => item.id === action.payload), 1);
        }
    }
})

export const { addToWishList, removeFromWishList } = slice.actions;
export default slice.reducer;