import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../redux/reduxStore";
import { Auth } from "aws-amplify";
import axiosInstance from "../../axios/axios_auth";
import BookingSummary from "../booking/booking-components/BookingSummary";
import { AuthEventData } from "@aws-amplify/ui";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import "../../scss/Confirmed.scss";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

type Props = {
  signOut: ((data?: AuthEventData | undefined) => void) | undefined;
};

export default function Confirmed({ signOut }: Props): JSX.Element {
  const bookingData = useSelector((state: RootState) => state.booking);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    //if user refreshes the page after booking , then redirect to home page
    if (bookingData.cleaningType === "") {
      navigate("/");
    } else {
      const postData = async () => {
        const bookingObject = {
          user_id: (await Auth.currentUserInfo()).attributes.sub,
          booking_data: bookingData,
        };
        const response = await axiosInstance.post("/booking", bookingObject);
      };
      postData();
    }
  }, []);

  return (
    <div>
      <div>
        <Header />
        <BookingSummary />
        <div className="sign-out-btn-container">
          <Button
            onClick={signOut}
            className="sign-out-btn"
            endIcon={<SendIcon />}
          >
            SignOut
          </Button>
        </div>
      </div>
    </div>
  );
}
