import React from "react";
import "./HeaderButton.css";

const HeaderButton = (props) => {
  return (
    <div className="header-action">
      <div className="header-action__user-address">
        <h3>User Address</h3>
      </div>
      <div className="header-action__button">
        <button className="custom-btn btn-3">
          <span>Connect</span>
        </button>
      </div>
    </div>
  );
};
export default HeaderButton;
