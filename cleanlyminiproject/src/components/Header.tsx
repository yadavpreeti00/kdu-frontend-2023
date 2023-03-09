// import '../scss/Header.scss';
// export default function Header() {
//   return (
//     <>
//       <div className="header">
//         <div className="header-text-1">
//           Clean<span className="header-text-2">ly</span>
//         </div>
        
//         <div className="header-contact">
//           800-710-8420
//         </div>
       
//       </div>
//     </>
//   );
// }


import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../scss/Header.scss';
const cleanlyLogo = require("../../src/assets/images/cleanly.png")

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
        <button className="header-button" onClick={() => handleHomePageButton()}>
          Home
        </button>
        <button className="header-button" onClick={() => handleMyBookingsButton()}>
          MyBookings
        </button>
      </div>
    </div>
  );
}
