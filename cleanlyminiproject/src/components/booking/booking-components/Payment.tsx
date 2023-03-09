import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../scss/Payment.scss";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { AppDispatch, RootState } from "../../../redux/reduxStore";
import { useNavigate } from "react-router-dom";
import {
  setEmail,
  setAddress,
  setPhoneNumber,
  setPinCode,
} from "../../../redux/bookingSlice";

export default function PaymentForm() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const bookingSummary = useSelector((state: RootState) => state.booking);


  const checkAllRequiredFields = () => {
    return (
      bookingSummary.cleaningType === "" ||
      bookingSummary.price === 0 ||
      bookingSummary.hours === 0 ||
      bookingSummary.startTime === ""
    );
  };

  



  useEffect(() => {
    console.log(checkAllRequiredFields());
    setDisabled(checkAllRequiredFields());
    console.log(disabled);
    //console.log("payment", bookingSummary);
  }, [bookingSummary]);

  const handleSubmit = () => {
    if (!disabled) {
      navigate("/booking-confirmed");
    }
  };

  const [disabled, setDisabled] = useState(true);

  const handlePhoneInput = (e: React.FocusEvent<HTMLInputElement>) => {
    const phoneNumber = parseInt(e.target.value);
    dispatch(setPhoneNumber(phoneNumber));
  };

  const handleEmailInput = (e: React.FocusEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
  };

  const handleAddressInput = (e: React.FocusEvent<HTMLInputElement>) => {
    dispatch(setAddress(e.target.value));
  };

  const handlePinCodeInput = (e: React.FocusEvent<HTMLInputElement>) => {
    const pinCode = parseInt(e.target.value);
    dispatch(setPinCode(pinCode));
  };

  return (
    <div className="payment">
      <div className="payment-heading-section">
        <div className="payment-heading">Payment Method</div>
        <div className="payment-logo-section">
          <FontAwesomeIcon icon={faLock} className="payment-logo-image" />
          <div className="payment-logo-text-div">
            <div className="payment-logo-text">256 bit secure</div>
            <div className="payment-logo-text">SSL Encryption</div>
          </div>
        </div>
      </div>
      <hr className="horizontal-row" />
      <form className="booking-form">
        <div className="card-details-section">
          <div className="card-details-heading">Credit Card details</div>
          <input
            type="text"
            className="card-number"
            placeholder="Card number"
            required
            pattern="^\d{16}$"
            title="Please enter a valid 16-digit card number"
          />
          <div className="card-detail-combined">
            <input
              type="text"
              className="card-detail-item"
              placeholder="MM/YY"
              required
              pattern="^(0[1-9]|1[0-2])\/\d{2}$"
              title="Please enter a valid expiry date in MM/YY format"
            />
            <input
              type="password"
              className="card-detail-item"
              placeholder="CVV"
              required
              pattern="^\d{3}$"
              title="Please enter a valid 3-digit CVV"
            />
            <input
              type="text"
              className="card-detail-item"
              placeholder="Name as on Card"
              required
              pattern="^[a-zA-Z ]+$"
              title="Please enter a valid name as on card"
            />
          </div>
        </div>
        <div className="personal-details-section">
          <div className="personal-details-heading">Personal details</div>
          <div className="personal-digital-details">
            <input
              type="email"
              className="personal-detail-item"
              placeholder="Email"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Please enter a valid email address"
              onChange={handleEmailInput}
            />
            <input
              type="number"
              className="personal-detail-item"
              placeholder="Phone Number"
              required
              pattern="^[0-9]{10}$"
              title="Please enter a valid 10-digit phone number"
              onChange={handlePhoneInput}
            />
          </div>
          <div className="personal-physical-details">
            <input
              type="text"
              className="personal-detail-item"
              placeholder="Your full address"
              required
              // pattern="^[a-zA-Z0-9\s,'-]*$"
              title="Please enter a valid address"
              onChange={handleAddressInput}
            />
            <input
              type="number"
              className="personal-detail-item"
              placeholder="10023"
              required
              pattern="^[0-9]{5}$"
              title="Please enter a valid 5-digit zip code"
              onChange={handlePinCodeInput}
            />
          </div>
        </div>
        <div className="complete-booking">
          <div className="checkbox-section">
            <input type="checkbox" className="checkbox" required />
            <div className="checkbox-detail">Check this custom checkbox</div>
            <input type="checkbox" className="checkbox" required />
            <div className="checkbox-detail">
              I read and agree to{" "}
              <a href="/" className="terms-condition-link">
                terms and conditions
              </a>
            </div>
          </div>

          <button 
            className={
              disabled ? "complete-booking " : "complete-booking selected"
            }
            onClick={() => handleSubmit()}
            disabled={disabled}
          >
            Complete Booking
          </button>
        </div>
      </form>
    </div>
  );
}
