import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name:"product",
    initialState: {
        products: [],
        isFetching: true,
        error: ""
    },
    reducers: {
        fetchInProgress: (state, action) => {
            state.isFetching = action.payload;
        },
        addProducts: (state, action) => {
            state.products.push(...action.payload)
            state.isFetching = false;
        },
        fetchError: (state, action) => {
            state.isFetching = false;
            state.error = action.payload;
        }
    }
})
export const getIsFetching = (store) => store.product.isFetching
export const getError = (store) => store.product.error
export const getProducts = (store) => store.product.products
export const { addProducts, fetchInProgress, fetchError } = slice.actions;
export default slice.reducer;