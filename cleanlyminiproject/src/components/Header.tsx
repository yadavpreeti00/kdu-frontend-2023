import React from "react";
import { useNavigate } from "react-router-dom";
import "../scss/Header.scss";
const cleanlyLogo = require("../../src/assets/images/cleanly.png");

export default function Header() {
  const navigate = useNavigate();
  const handleHomePageButton = () => {
    navigate("/");
  };
  const handleMyBookingsButton = () => {
    navigate("/my-bookings");
  };

  return (
    <div className="header">
      <img src={cleanlyLogo} alt="Cleanly" className="header-log" />
      <div className="buttons">
        <button
          className="header-button"
          onClick={() => handleHomePageButton()}
        >
          Home
        </button>
        <button
          className="header-button"
          onClick={() => handleMyBookingsButton()}
        >
          MyBookings
        </button>
      </div>
    </div>
  );
}
