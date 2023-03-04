import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../constants/config";

const initState={
    categories:[],
    status:""
}

export const fetchCategories = createAsyncThunk(
    "categories/fetch",
    async()=>{
        const response = await axios.get(config.getAllCategoriesPath);
        return response.data;
    }
);

const categoriesSlice=createSlice({
    name: "categories",
    initialState:initState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchCategories.fulfilled,(state,action)=>{
            state.categories=action.payload;
            state.status='success';
        })
        .addCase(fetchCategories.pending,(state)=>{
            state.status='pending';
        })
        .addCase(fetchCategories.rejected,(state)=>{
            state.status='failure';
        })
    }
});

export default categoriesSlice.reducer;
