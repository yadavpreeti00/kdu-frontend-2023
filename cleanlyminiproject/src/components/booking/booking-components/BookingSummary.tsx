import React from "react";
import "../../../scss/BookingSummary.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/reduxStore";
import CalculateTotalPrice from "../../../utils/CalculatePrice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faBroom,
  faCalendar,
  faClock,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";

export default function BookingSummary(): JSX.Element {
  const bookingSummary = useSelector((state: RootState) => state.booking);
  return (
    <div className="booking-summary">
      <div className="booking-summary-heading">Booking Summary</div>
      <div className="services-section">
        {!(bookingSummary.cleaningType === "") ? (
          <div className="cleaning-type">
            <div className="icon">
              <FontAwesomeIcon icon={faBroom} />
            </div>
            <div className="cleaning-type-text">
              {bookingSummary.cleaningType} Cleaning
            </div>
          </div>
        ) : (
          <></>
        )}
        {!(bookingSummary.date === "") || !(bookingSummary.startTime === "") ? (
          <div className="date-time">
            <div className="icon">
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <div className="date-time-text">
              {bookingSummary.date} @ {bookingSummary.startTime}
            </div>
          </div>
        ) : (
          <></>
        )}
        {!(bookingSummary.hours === 0) ? (
          <div className="number-of-hours">
            <div className="icon">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <div className="hours-text">{bookingSummary.hours} hours</div>
          </div>
        ) : (
          <></>
        )}
        {!(bookingSummary.cleaningFrequency === "") ? (
          <div className="frequency-section">
            <div className="icon">
              <FontAwesomeIcon icon={faRepeat} />
            </div>
            <div className="frequency-text">
              {bookingSummary.cleaningFrequency}
            </div>
          </div>
        ) : (
          <></>
        )}
        {!(
          bookingSummary.personalDetails.address === "" &&
          bookingSummary.personalDetails.pincode === null
        ) ? (
          <div className="address">
            <div className="icon">
              <FontAwesomeIcon icon={faLocationPin} />
            </div>
            <div className="address-text">
              {bookingSummary.personalDetails.address}{" "}
              {bookingSummary.personalDetails.pincode}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      <hr className="horizontal-rule"></hr>
      <div className="cost-section">
        <div className="text-section">Total Cost</div>
        <div className="cost-section">
          $ <CalculateTotalPrice />
        </div>
      </div>
    </div>
  );
}
