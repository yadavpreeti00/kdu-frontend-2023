import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchReducer";
import  todoReducer from "./todoReducer";


const reduxStore = configureStore({
    reducer: {
        todo : todoReducer,
        search:searchReducer
    }
});


export default reduxStore;