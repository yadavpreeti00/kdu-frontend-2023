import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import categoryProductsSlice from "./categoryProductsSlice";
import currentDropDownSlice from "./currentDropDownSlice";
import selectedCategorySlice from "./selectedCategorySlice";
import searchSlice from "./searchSlice";
import cartSlice from "./cartSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";



const persistConfig={
  key:"cart-storage",
  storage,
  whiteList:["cartSlice"],
}

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    categories: categoriesSlice,
    categoryProducts: categoryProductsSlice,
    selectedCategory: selectedCategorySlice,
    currentCategory: currentDropDownSlice,
    search: searchSlice,
    cart : cartSlice,
  })
);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store)


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

