import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../constants/config";

interface Item{
  id: number;
  name: string;
  image: string;
  title: string;
  price: number;
}
interface State {
  category: string;
  products: {
    categoryName: string;
    Items:Item[]; 
  }[];
  status: string;
}

const initState:State = {
  category:"",
  products: [
    {
      categoryName: "",
      Items: [],
    },
  ],
  status: "",
};

type ResponseType = {
  categoryName: string;
  Items: [];
};

export const fetchAllCategoriesProducts = createAsyncThunk(
  "allProduct/fetch",
  async (categories: string[]) => {
    let resultArray: ResponseType[] = [];
      
      for (const category of categories) {
        const productResponse = await axios.get(
          config.getCategoryPath + "/" + category + "?limit=3"
        );
        resultArray.push({
          categoryName: category,
          Items: productResponse.data,
        });
      }
      return resultArray ;
    });
    

const categoryProductsSlice = createSlice({
  name: "allProducts",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategoriesProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "success";
      })
      .addCase(fetchAllCategoriesProducts.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchAllCategoriesProducts.rejected, (state, action) => {
        state.status = "failure";
      });
  },
});

export default categoryProductsSlice.reducer;

