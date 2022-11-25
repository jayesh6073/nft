import React from "react";
import "./PortfolioMinterPrice.css";
import { BiRightArrowAlt } from "react-icons/bi";

const PortfolioMinterPrice = (props) => {
  return (
    <div className="portfolio-minter-price-container">
      <div className="portfolio-minter-price-content">
        <span>
          160 ETH 12/14 <br />
          Bid 100 ETH
        </span>
      </div>
      <div className="portfolio-minter-price-button">
        <button type="button">
          <BiRightArrowAlt className="price-icon" />
        </button>
      </div>
    </div>
  );
};
export default PortfolioMinterPrice;
