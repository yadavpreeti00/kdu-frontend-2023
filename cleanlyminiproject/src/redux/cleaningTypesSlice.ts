import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {axiosInstances} from "../axios/axios";


const initState = {
  cleaningTypes: [],
  status: "", // 'pending'|'success'|'rejected'
};

//arguments to createAsyncThunk
//first  is generated prefix for generated action type
//second is payload creator callback
export const fetchCleaningTypes = createAsyncThunk(
  "cleaningTypes/fetch",
  async (arg, thunkApi) => {
    const response = await axiosInstances.cleaningTypesInstance.get("");
    return response.data;
  }
);

const cleaningTypesSlice = createSlice({
  name: "cleaningTypes",
  initialState: initState,
  reducers: {
  },
  extraReducers (builder) {
    builder
      .addCase(fetchCleaningTypes.fulfilled, (state, action) => {
        state.cleaningTypes = action.payload;
        state.status = "success";
      })
      .addCase(fetchCleaningTypes.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchCleaningTypes.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export default cleaningTypesSlice.reducer;