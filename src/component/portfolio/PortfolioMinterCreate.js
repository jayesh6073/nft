import React from "react";
import "./PortfolioMinterCreate.css";
import p1 from "../../image/p1.jpeg";

const PortfolioMinterCreate = (props) => {
  return (
    <div className="portfolio-minter-create-container">
      <img src={p1} alt="" />
      <span>Created by @Martina</span>
    </div>
  );
};
export default PortfolioMinterCreate;
