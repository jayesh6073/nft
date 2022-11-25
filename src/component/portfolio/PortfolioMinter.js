import React, { Fragment } from "react";
import "./PortfolioMinter.css";
import PortfolioMinterCreate from "./PortfolioMinterCreate";
import PortfolioMinterPrice from "./PortfolioMinterPrice";

const PortfolioMinter = (props) => {
  return (
    <Fragment>
      <div className="portfolio-minter-container">
        <div className="portfolio-minter-image">
          <img src={props.img} alt="" />
          <span>Art of the Infinity</span>
        </div>
        <div className="portfolio-minter-price">
          <PortfolioMinterPrice />
        </div>
        <div className="portfolio-minter-create">
          <PortfolioMinterCreate />
        </div>
      </div>
    </Fragment>
  );
};
export default PortfolioMinter;
