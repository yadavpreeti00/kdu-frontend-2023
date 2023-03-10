import { createSlice } from "@reduxjs/toolkit";

interface IPrice {
  cleaningTypePrice: number;
  bedRoomPrice: number;
  bathroomPrice: number;
  extrasPrice: number;
}

const initialState: IPrice = {
  cleaningTypePrice: 0,
  bedRoomPrice: 0,
  bathroomPrice: 0,
  extrasPrice: 0,
};

export const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    setCleaningTypePrice: (state, action) => {
      state.cleaningTypePrice = action.payload;
    },
    setBedRoomPrice: (state, action) => {
      state.bedRoomPrice = action.payload;
    },
    setBathRoomPrice: (state, action) => {
      state.bedRoomPrice = action.payload;
    },
    addExtrasPrice: (state, action) => {
      state = {
        ...state,
        extrasPrice: action.payload,
      };
    },
  },
});

export const {
  setCleaningTypePrice,
  setBedRoomPrice,
  setBathRoomPrice,
  addExtrasPrice,
} = priceSlice.actions;

export default priceSlice.reducer;
