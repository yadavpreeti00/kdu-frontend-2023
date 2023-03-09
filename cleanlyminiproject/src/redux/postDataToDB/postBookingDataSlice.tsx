import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/axios_auth";

import { Auth } from "aws-amplify";
import { v4 as uuidv4 } from 'uuid';

const initState={
    status: ""
}


export const postBookingData=createAsyncThunk(
    "postBookingData/post",
    async() => {
        const bookingObject = {
            user_id: (await Auth.currentUserInfo()).attributes.sub,
            //bookingId: uuidv4(),
            //booking_data: bookingData
          }
          console.log(bookingObject);
          const response = await axiosInstance.post("/booking", bookingObject);
          console.log(response);
    });

const postBookingSlice = createSlice({
  name: "postBookingData",
  initialState: initState,
  reducers: {
  },
  extraReducers (builder) {
    builder
      .addCase(postBookingData.fulfilled, (state, action) => {
        
      })
      .addCase(postBookingData.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(postBookingData.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default postBookingSlice.reducer;