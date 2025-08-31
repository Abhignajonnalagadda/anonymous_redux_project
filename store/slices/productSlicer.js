import products from '../productList'
import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name:"product",
    initialState: products,
    reducers: {}
})
export default slice.reducer;