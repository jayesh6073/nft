import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import HeaderButton from "./HeaderButton.js";
import HeaderLogo from "./HeaderLogo.js";

const Header = (props) => {
  return (
    <Fragment>
      <div className="header">
        <HeaderLogo />
        <div className="header-content">
          <ul className="navlinks">
            <li>
              <a href="#about">Home</a>
            </li>
            <li>
              <a href="#demo">About</a>
            </li>
            <li>
              <Link to="/mint">
                <a href="#features">Mint</a>
              </Link>
            </li>
            <li>
              <a href="#howto">Portfolio</a>
            </li>
          </ul>
        </div>
        <HeaderButton />
      </div>
    </Fragment>
  );
};
export default Header;
