import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    searchProduct: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { searchProduct } = searchSlice.actions;
export default searchSlice.reducer;