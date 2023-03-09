import { createSlice } from "@reduxjs/toolkit";

export interface IBooking {
  booking_id: any;
  cleaningType: string;
  cleaningFrequency: string;
  bedRoomCount: number;
  bathRoomCount: number;
  hours: number;
  date: string;
  startTime: string;
  price: number;
  extras: string[];
  specialRequirements: string | null;
  personalDetails: {
    email: string;
    phoneNumber: number | null;
    address: string;
    pincode: number | null;
  };
}

const initialState: IBooking = {
  booking_id: "",
  cleaningType: "",
  cleaningFrequency: "",
  bedRoomCount: 0,
  bathRoomCount: 0,
  hours: 0,
  date: "",
  startTime: "",
  price: 0,
  extras: [],
  specialRequirements: null,
  personalDetails: {
    email: "",
    phoneNumber: null,
    address: "",
    pincode: null,
  },
};

export const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setCleaningType: (state, action) => {
      state.cleaningType = action.payload;
    },
    setCleaningFrequency: (state, action) => {
      state.cleaningFrequency = action.payload;
    },
    addBedRoomCount: (state, action) => {
      state.bedRoomCount = action.payload;
    },
    subtractBedRoomCount: (state, action) => {
      state.bedRoomCount = action.payload;
    },
    addBathRoomCount: (state, action) => {
      state.bathRoomCount = action.payload;
    },
    subtractBathRoomCount: (state, action) => {
      state.bathRoomCount = action.payload;
    },
    setHours: (state, action) => {
      state.hours = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setStartTime: (state, action) => {
      state.startTime = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    },
    addExtra: (state, action) => {
      state.extras.push(action.payload);
    },
    removeExtra: (state, action) => {
      state.extras.splice(state.extras.indexOf(action.payload), 1);
    },
    setSpecialRequirements: (state, action) => {
      state.specialRequirements = action.payload;
    },
    setEmail: (state, action) => {
      state.personalDetails.email = action.payload;
    },
    setPhoneNumber: (state, action) => {
      state.personalDetails.phoneNumber = action.payload;
    },
    setAddress: (state, action) => {
      state.personalDetails.address = action.payload;
    },
    setPinCode: (state, action) => {
      state.personalDetails.pincode = action.payload;
    },
  },
});

export const {
  setCleaningType,
  setCleaningFrequency,
  addBedRoomCount,
  subtractBedRoomCount,
  addBathRoomCount,
  subtractBathRoomCount,
  setHours,
  setDate,
  setStartTime,
  setPrice,
  addExtra,
  removeExtra,
  setSpecialRequirements,
  setEmail,
  setPhoneNumber,
  setAddress,
  setPinCode,
} = bookingSlice.actions;

export default bookingSlice.reducer;
