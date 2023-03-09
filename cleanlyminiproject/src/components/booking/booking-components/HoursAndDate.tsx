import React from "react";
import "../../../scss/HoursAndDate.scss";
import { AppDispatch ,RootState} from "../../../redux/reduxStore";
import {useSelector,useDispatch} from "react-redux";
import { setDate, setHours } from "../../../redux/bookingSlice";



export default function HoursAndDate(): JSX.Element {
  const dispatch = useDispatch<AppDispatch>();

  const hours=useSelector(
    (state: RootState) =>
      state.booking.hours
  );

  const handleAddHours=() =>{
      dispatch(setHours(hours+1));
  }
  const handleSubtractHours=()=>{
    if(hours>0)
    {
      dispatch(setHours(hours-1));
    }
  }
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   
    dispatch(setDate(event.target.value));
  };
  return (
    <div className="schedule-container">
      <div className="schedule-heading">Choose hours and dates</div>
      <div className="schedule-hour-date">
        <div className="schedule-hour-container"> 
            <div className="schedule-hour-heading">
                How many hours?
            </div>
            <div className="schedule-hour-field">
                <button className="hour-btn" onClick={handleAddHours}>+</button>
                <div className="hour-count">{hours}</div>
                <button className="hour-btn" onClick={handleSubtractHours}>-</button>
          </div>
        </div>
        <div className="schedule-date-container">
            <div className="schedule-date-heading">
                Choose a date?
            </div>
            <input type="date" className="schedule-date-input" onChange={handleDateChange}/>

        </div>

      </div>
    </div>
  );
}
