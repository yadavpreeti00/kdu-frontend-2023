import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";

const reduxStore = configureStore({
  reducer: {
    products: productsSlice,
  },
});

export default reduxStore;
