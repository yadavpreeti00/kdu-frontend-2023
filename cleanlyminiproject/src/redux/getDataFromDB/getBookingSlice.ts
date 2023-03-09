import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/axios_auth";

import { Auth } from "aws-amplify";
import { IBooking } from "../bookingSlice";

interface IBookedData {
  user_id: number;
}

interface IDataSlice {
  status: Boolean;
  bookedData: any[];
}

const initState: IDataSlice = {
  status: false,
  bookedData: [],
};

export const getBookingData = createAsyncThunk(
  "getBookedData/post",
  async () => {
    const userId = (await Auth.currentUserInfo()).attributes.sub;
    const queryString = `?user_id=${userId}`;
    const response = await axiosInstance.get("/booking" + queryString);
    return response.data.Items;
  }
);

const getBookingSlice = createSlice({
  name: "getBookedData",
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(
        getBookingData.fulfilled,
        (state, action: PayloadAction<IBooking[]>) => {
          state.status = true;
          state.bookedData = action.payload;
        }
      )
      .addCase(getBookingData.pending, (state, action) => {
        state.status = false;
      })
      .addCase(getBookingData.rejected, (state, action) => {
        state.status = false;
      });
  },
});

export default getBookingSlice.reducer;
