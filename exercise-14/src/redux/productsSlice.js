import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../constants/config";

const initState = {
  products: [],
  status: "", // 'pending'|'success'|'rejected'
};

//arguments to createAsyncThunk
//first  is generated prefix for generated action type
//second is payload creator callback
export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async (arg, thunkApi) => {
    const response = await axios.get(config.getProductsPath);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: initState,
  reducers: {
  },
  extraReducers (builder) {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "success";
      })
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default productsSlice.reducer;
