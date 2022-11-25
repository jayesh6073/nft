import React from "react";
import "./card.css";

import PortfolioMinterCreate from "./PortfolioMinterCreatelive";

function Card(props) {
  return (
    <>
      <div className="card1">
        <div className="l1">
          <img src={props.img} alt="" />
        </div>
        <div className="l2">
          <h1>Jayesh M.</h1>
        </div>
        <div className="l3">
          <PortfolioMinterCreate />
        </div>
        <div className="l4">
          <button className="purchase">PLACE A BID</button>
        </div>
      </div>
    </>
  );
}

export default Card;
