import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {axiosInstances} from "../axios/axios";


const initState = {
  roomTypes: [],
  status: "", // 'pending'|'success'|'rejected'
};

//arguments to createAsyncThunk
//first  is generated prefix for generated action type
//second is payload creator callback
export const fetchRoomTypes = createAsyncThunk(
  "roomTypes/fetch",
  async (arg, thunkApi) => {
    const response = await axiosInstances.roomTypesInstance.get("");
    return response.data;
  }
);

const roomTypesSlice = createSlice({
  name: "roomTypes",
  initialState: initState,
  reducers: {
  },
  extraReducers (builder) {
    builder
      .addCase(fetchRoomTypes.fulfilled, (state, action) => {
        state.roomTypes = action.payload;
        state.status = "success";
      })
      .addCase(fetchRoomTypes.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchRoomTypes.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default roomTypesSlice.reducer;