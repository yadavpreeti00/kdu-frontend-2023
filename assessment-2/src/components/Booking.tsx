import React from "react";

import "../scss/Booking.scss";
import Date from "./Date";
import Form from "./Form";
import RoomType from "./RoomType";



export default function Booking(): JSX.Element {
 

  return (
    <div className="booking-page">
        <div className="main-heading">Hotel Booking</div>
        <RoomType/>
        <Date/>
        <Form/>
        
    </div>
  );
}
