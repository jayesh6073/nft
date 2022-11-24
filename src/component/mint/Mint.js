import React, { Fragment } from "react";
import Header from "../header/Header";
import MinterForm from "./MintForm";
import s6 from "../../image/s6.jpeg";
import "./Mint.css";

const Mint = (props) => {
  return (
    <Fragment>
      <Header />
      <div className="bg-image1">
        <div className="mint-container">
          <div className="mint-title">
            <h4>BEGIN MINT</h4>
            <span>
              Select 2 Chainnft below to burn,
              <br />
              or purchase a Minter directly below.
            </span>
          </div>
          <div className="mint-image-upload">
            <img src={s6} alt="" />
          </div>
          <div className="mint-section-divide-line"></div>
          <div className="mint-guide-content">
            <span>OR PURCHASE DIRECTLY BELOW</span>
          </div>
          <div className="mint-form">
            <MinterForm></MinterForm>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Mint;
