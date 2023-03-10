import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstances } from "../axios/axios";

const initState = {
  cleaningFrequencies: [],
  status: "", // 'pending'|'success'|'rejected'
};

export const fetchCleaningFrequencies = createAsyncThunk(
  "cleaningFrequencies/fetch",
  async (arg, thunkApi) => {
    const response = await axiosInstances.cleaningFrequenciesInstance.get("");
    return response.data;
  }
);

const cleaningFrequenciesSlice = createSlice({
  name: "cleaningFrequencies",
  initialState: initState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCleaningFrequencies.fulfilled, (state, action) => {
        state.cleaningFrequencies = action.payload;
        state.status = "success";
      })
      .addCase(fetchCleaningFrequencies.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchCleaningFrequencies.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default cleaningFrequenciesSlice.reducer;
