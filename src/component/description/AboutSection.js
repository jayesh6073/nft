import React from "react";
import "./AboutSection.css";
import mobile from "../../image/mobile-image.png";
const AboutSection = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="about-section__inform">
          <h1>
            The project that inspired the <br />
            modern CryptoArt movement
          </h1>
          <p>
            10,000 unique collectible characters with proof of <br />
            ownership stored on the Ethereum blockchain.
          </p>
        </div>
        <div className="about-section__actions">
          <button className="about-section__action">Mint now</button>
        </div>
      </div>
      <div className="image-section">
        <img src={mobile} alt="" />
      </div>
    </div>
  );
};
export default AboutSection;
