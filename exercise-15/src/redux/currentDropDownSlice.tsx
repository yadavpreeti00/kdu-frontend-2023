import { createSlice } from "@reduxjs/toolkit";


const initState = {
    currentCategory:"allCategories",
  };


const currentDropDownSlice=createSlice({
    name:"currentCategory",
    initialState:initState,
    reducers:{
        setCurrentCategory: (state, action) => {
            state.currentCategory = action.payload;
          },
    }
});

export default currentDropDownSlice.reducer;
export const { setCurrentCategory } = currentDropDownSlice.actions;