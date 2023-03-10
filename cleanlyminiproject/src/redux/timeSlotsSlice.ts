import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstances } from "../axios/axios";

const initState = {
  timeSlots: [],
  status: "", // 'pending'|'success'|'rejected'
};

//arguments to createAsyncThunk
//first  is generated prefix for generated action type
//second is payload creator callback
export const fetchTimeSlots = createAsyncThunk("timeSlots/fetch", async () => {
  const response = await axiosInstances.timeSlotsInstance.get("");
  return response.data;
});

const timeSlotsSlice = createSlice({
  name: "timeSlotsTypes",
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchTimeSlots.fulfilled, (state, action) => {
        state.timeSlots = action.payload;
        state.status = "success";
      })
      .addCase(fetchTimeSlots.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchTimeSlots.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default timeSlotsSlice.reducer;
