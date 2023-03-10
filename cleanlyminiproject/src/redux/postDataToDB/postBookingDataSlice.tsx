import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../axios/axios_auth";
import { Auth } from "aws-amplify";

const initState = {
  status: "",
};

export const postBookingData = createAsyncThunk(
  "postBookingData/post",
  async () => {
    const bookingObject = {
      user_id: (await Auth.currentUserInfo()).attributes.sub,
    };
    const response = await axiosInstance.post("/booking", bookingObject);
  }
);

const postBookingSlice = createSlice({
  name: "postBookingData",
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(postBookingData.fulfilled, (state, action) => {})
      .addCase(postBookingData.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(postBookingData.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default postBookingSlice.reducer;
