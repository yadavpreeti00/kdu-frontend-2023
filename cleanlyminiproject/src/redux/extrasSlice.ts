import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {axiosInstances} from "../axios/axios";


const initState = {
  extras: [],
  status: "", // 'pending'|'success'|'rejected'
};

//arguments to createAsyncThunk
//first  is generated prefix for generated action type
//second is payload creator callback
export const fetchExtras = createAsyncThunk(
  "extras/fetch",
  async (arg, thunkApi) => {
    const response = await axiosInstances.extrasInstance.get("");
    return response.data;
  }
);

const extrasSlice = createSlice({
  name: "extras",
  initialState: initState,
  reducers: {
  },
  extraReducers (builder) {
    builder
      .addCase(fetchExtras.fulfilled, (state, action) => {
        state.extras = action.payload;
        state.status = "success";
      })
      .addCase(fetchExtras.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchExtras.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default extrasSlice.reducer;