import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="option-container">
        <div className="footer-option">
          <p>Privacy Policy</p>
          <p>Testing Condition</p>
          <p>Cookies Policy</p>
        </div>
        <div className="footer-option">
          <p>About</p>
          <p>Mental</p>
          <p>Outhere</p>
        </div>
        <div className="footer-option">
          <p>Gallery</p>
          <p>Contact</p>
        </div>
      </div>

      <div className="contact-container">
        <div className="box-social">
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
        </div>
        <div className="contact">
            +84 123456789
        </div>
        <div className="address">
            934 43 street, Thu Duc, HoChiMinh
        </div>


      </div>
    </div>
  );
};

export default Footer;
