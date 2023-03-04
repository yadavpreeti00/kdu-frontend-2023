import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../constants/config";

interface Product{
  id: number;
  name: string;
  image: string;
  title: string;
  price: number;
}
interface State {
  category: string;
  products: Product[];
  status: string;
}
const initState: State = {
  category: "",
  products: [],
  status: "",
};

export const fetchCategoryProduct= createAsyncThunk(
  "categoryProduct/fetch",
  async (category:string,thunkAPI) => {
    const response = await axios.get(
      config.getCategoryPath + "/" + category 
    );
    return response.data;
  }
);

const selectedCategorySlice = createSlice({
  name: "categoryProduct",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoryProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.products = action.payload; 
        state.category = "";
      })
      .addCase(fetchCategoryProduct.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchCategoryProduct.rejected, (state, action) => {
        state.status = "failure";
      });
  },
});

export default selectedCategorySlice.reducer;
