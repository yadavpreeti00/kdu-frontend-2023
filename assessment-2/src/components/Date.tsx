import React from "react";
import '../scss/Date.scss';

export default function Date(): JSX.Element {
  return (
    <div className="date-container">
      <div className="heading">Select Date</div>
      <div className="select-date-container">
        <div className="start-date">
          <input type="date" className="start-date-input" placeholder="26/03/2023"></input>
        </div>
        <div className="end-date">
          <input type="date" className="end-date-input" placeholder="27/03/2023"></input>
        </div>
      </div>
    </div>
  );
}
