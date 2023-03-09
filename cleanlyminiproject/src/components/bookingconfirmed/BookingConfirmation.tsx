import React, { useEffect } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reduxStore";
import { Auth } from "aws-amplify";
import axiosInstance from "../../axios/axios_auth";
import BookingSummary from "../booking/booking-components/BookingSummary";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import Confirmed from "./Confirmed";

export default function BookingConfirmation(): JSX.Element {
  const bookingData = useSelector((state: RootState) => state.booking);


  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div>
          <Confirmed  signOut={signOut}/>
        </div>
      )}
    </Authenticator>
  );
}
