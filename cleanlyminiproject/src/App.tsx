import "./App.css";

import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports.js";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/reduxStore";
import { useEffect } from "react";
import { fetchCleaningTypes } from "./redux/cleaningTypesSlice";
import { fetchCleaningFrequencies } from "./redux/cleaningFrequenciesSlice";
import { fetchRoomTypes } from "./redux/roomTypesSlice";
import { fetchTimeSlots } from "./redux/timeSlotsSlice";
import { fetchExtras } from "./redux/extrasSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BookingConfirmation from "./components/bookingconfirmed/BookingConfirmation";
import MyBookings from "./components/viewBookings/MyBookings";

// Configure Amplify in index file or root file
Amplify.configure({
  Auth: {
    region: awsExports.REGION,
    userPoolId: awsExports.USER_POOL_ID,
    userPoolWebClientId: awsExports.USER_POOL_APP_CLIENT_ID,
  },
});

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCleaningTypes());
    dispatch(fetchCleaningFrequencies());
    dispatch(fetchRoomTypes());
    dispatch(fetchTimeSlots());
    dispatch(fetchExtras());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/booking-confirmed"
            element={
              <Authenticator>
                <BookingConfirmation />
              </Authenticator>
            }
          />
          <Route
            path="/my-bookings"
            element={
              <Authenticator>
                {({ signOut, user }) => <MyBookings signOut={signOut} />}
              </Authenticator>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
