import { AnyAction, configureStore, ThunkAction } from "@reduxjs/toolkit";
import formSlice from "./formSlice";
import bookingSlice from "./formSlice";
import roomSlice from "./roomSlice";


const reduxStore = configureStore({
  reducer: {
    rooms : roomSlice,
    bookings : bookingSlice,
    form: formSlice
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
