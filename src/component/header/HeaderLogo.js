import React from "react";
import "./HeaderLogo.css";
import logo from "../../image/logo 3.png";
const HeaderLogo = (props) => {
  return (
    <div className="headerlogo">
      <div className="image">
        <img src={logo} alt="" />
      </div>
      <div className="logo-name">
        <h2>inter</h2>
      </div>
    </div>
  );
};
export default HeaderLogo;
