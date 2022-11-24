import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="footer-row">
        <div className="footer-list">
          <ul>
            <li>FAQ</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Service</li>
            <li>Support</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="footer-icon">
          <div className="footer-icon-box">
            <BsFacebook />
          </div>
          <div className="footer-icon-box">
            <BsInstagram />
          </div>
          <div className="footer-icon-box">
            <BsTwitter />
          </div>
          <div className="footer-icon-box">
            <BsYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
