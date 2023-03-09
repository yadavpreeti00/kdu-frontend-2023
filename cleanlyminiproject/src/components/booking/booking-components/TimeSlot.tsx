import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStartTime } from "../../../redux/bookingSlice";
import { RootState, AppDispatch } from "../../../redux/reduxStore";
import "../../../scss/TimeSlot.scss";

interface ITimeSlot {
  id: number;
  time: string;
}

export default function TimeSlot(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const timeSlots = useSelector(
    (state: RootState) => state.timeSlots.timeSlots as ITimeSlot[]
  );

  const selectedTimeSlot = useSelector((state: RootState) => state.booking.startTime);

  const handleTimeSlot = (timeSlot: ITimeSlot) => {
    dispatch(setStartTime(timeSlot.time));
  };

  return (
    <div className="time-slot-container">
      <div className="time-slot-heading">When do you like to start?</div>
      <div className="time-slot-grid">
        {timeSlots.map((timeSlot) => (
          <button 
            className={`time-slot-item ${timeSlot.time === selectedTimeSlot ? "active" : ""}`}
            key={timeSlot.id}
            onClick={() => handleTimeSlot(timeSlot)}
          >
            {timeSlot.time}
          </button>
        ))}
      </div>
    </div>
  );
}
