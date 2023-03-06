import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { instance } from "../axios/axios";

interface RoomType{
  id: number;
  name: string;
  pricePerNight: string;
  currency: string;
  addOns: AddOn[];

}
interface AddOn {
  name: string;
  cost: string;
  currency: string;
}
interface HotelState {
  roomTypes:RoomType[];
  status: "success" | "pending" | "rejected" | "idle";
}
const initState: HotelState = {
  roomTypes: [],
  status: "idle",
};



//arguments to createAsyncThunk
//first  is generated prefix for generated action type
//second is payload creator callback
export const fetchRooms = createAsyncThunk(
  "rooms/fetch",
  async (arg, thunkApi) => {
    const response = await instance.get("");
    console.log("thunk",response.data.body)
    return response.data.body ;
  }
);

const roomSlice = createSlice({
  name: "rooms",
  initialState: initState,
  reducers: {
    addPriceReducer: (state, action) => {

    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchRooms.fulfilled, (state, action) => {
        const roomTypes=JSON.parse(action.payload).roomTypes;
        console.log(roomTypes);
        state.roomTypes = roomTypes;

        console.log(state.roomTypes);
        state.status = "success";
      })
      .addCase(fetchRooms.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(fetchRooms.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
  
});

export default roomSlice.reducer;
