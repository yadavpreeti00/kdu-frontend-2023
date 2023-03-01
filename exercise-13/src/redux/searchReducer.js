import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    searchTodoAction: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { searchTodoAction } = searchSlice.actions;
export default searchSlice.reducer;
