import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: number;
  name: string;
  image: string;
  title: string;
  price: number;
  quantity: number;
};
type Item = {
  id: number;
  name: string;
  image: string;
  title: string;
  price: number;
};

type CartState = {
  products: CartItem[];
};

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartAction: (state, action: PayloadAction<Item>) => {
      const itemToAdd = action.payload;
      const existingItem = state.products.find(
        (item) => item.id === itemToAdd.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.products.push({
          ...itemToAdd,
          quantity: 1,
        });
      }
    },
    removeFromCartAction: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const existingItem = state.products.find((item) => item.id === itemId);

      if (existingItem) {
        existingItem.quantity--;

        if (existingItem.quantity === 0) {
          state.products = state.products.filter((item) => item.id !== itemId);
        }
      }
    },
    clearCartAction: (state) => {
      state.products = [];
    },
  },
});
export default cartSlice.reducer;

export const { addToCartAction, removeFromCartAction, clearCartAction } =
  cartSlice.actions;
