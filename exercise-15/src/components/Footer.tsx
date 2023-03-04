import React, { FC } from "react";
import "../scss/footer.scss";
const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer_top-section">
        <span>random@kickdrumtech.com</span>
        <span className="footer_top-section__subscribe">SUBSCRIBE</span>
      </div>
      <div className="footer__services">
        <span>Best Sellers</span>
        <span>Gift Ideas</span>
        <span>New Releases</span>
        <span>Today's Deals</span>
        <span>Customer Service</span>
      </div>
      <span className="helpline">Help Line Number : +1 1800 1200 1200</span>
      <span className="copyright">
        © 2020 All Rights Reserved. Design by Free html Templates
      </span>
    </div>
  );
};
export default Footer;