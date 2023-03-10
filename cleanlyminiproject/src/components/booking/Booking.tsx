import React from "react";
import "../../scss/Booking.scss";
import CleaningFrequency from "./booking-components/CleaningFrequency";
import CleaningType from "./booking-components/CleaningType";
import RoomType from "./booking-components/RoomType";
import Extras from "./booking-components/Extras";
import SpecialRequirements from "./booking-components/SpecialRequirements";
import HoursAndDate from "./booking-components/HoursAndDate";
import TimeSlot from "./booking-components/TimeSlot";
import Payment from "./booking-components/Payment";
import BookingSummary from "./booking-components/BookingSummary";

export default function Booking(): JSX.Element {
  return (
    <div className="booking-page">
      <div className="heading">Book your cleaning</div>
      <div className="sub-heading">
        Its time to book our cleaning service for your home or apartment.
      </div>
      <div className="booking-container">
        <div className="booking-form">
          <div className="booking-form-heading">Cleaning Preferences</div>
          <CleaningType />
          <CleaningFrequency />
          <RoomType />
          <Extras />
          <SpecialRequirements />
          <HoursAndDate />
          <TimeSlot />
          <Payment />
        </div>
        <BookingSummary />
      </div>
    </div>
  );
}
