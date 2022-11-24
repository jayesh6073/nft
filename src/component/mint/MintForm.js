import React, { useState } from "react";
import "./MintForm.css";
import MinterCounter from "./MintCounter";
const MintForm = (props) => {
  const [price, setPrice] = useState();
  const [number, setNumber] = useState();
  return (
    <div className="minter-form-container">
      <div className="minter-form-price">
        <h4>{price} ETH</h4>
        <span>PURCHASE PRICE</span>
      </div>
      <div className="minter-form-counter">
        <MinterCounter getValue={setPrice} getNumber={setNumber} />
      </div>
      <div className="minter-form-action">
        <button type="submit">PURCHASE {number} MINTER</button>
      </div>
    </div>
  );
};
export default MintForm;
