import { AnyAction, configureStore, ThunkAction } from "@reduxjs/toolkit";
import bookingSlice from "./bookingSlice";
import cleaningFrequenciesSlice from "./cleaningFrequenciesSlice";
import cleaningTypesSlice from "./cleaningTypesSlice";
import extrasSlice from "./extrasSlice";
import getBookingSlice from "./getDataFromDB/getBookingSlice";
import postBookingDataSlice from "./postDataToDB/postBookingDataSlice";
import priceSlice from "./priceSlice";
import roomTypesSlice from "./roomTypesSlice";
import timeSlotsSlice from "./timeSlotsSlice";

const reduxStore = configureStore({
  reducer: {
    cleaningTypes: cleaningTypesSlice,
    cleaningFrequencies: cleaningFrequenciesSlice,
    roomTypes: roomTypesSlice,
    timeSlots: timeSlotsSlice,
    extras: extrasSlice,
    booking: bookingSlice,
    price: priceSlice,
    postBookingData: postBookingDataSlice,
    getBookedData: getBookingSlice,
  },
});

export default reduxStore;
export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
