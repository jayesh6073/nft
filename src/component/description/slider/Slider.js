import React from "react";
import "./Slider.css";
import s1 from "../../../image/s1.jpeg";
import s2 from "../../../image/s2.png";
import s3 from "../../../image/s3.jpeg";
import s4 from "../../../image/s4.jpeg";

const Slider = (props) => {
  return (
    <div className="slider-container">
      <div id="slider">
        <figure>
          <img src={s1} alt="" />
          <img src={s2} alt="" />
          <img src={s3} alt="" />
          <img src={s4} alt="" />
        </figure>
      </div>
    </div>
  );
};
export default Slider;
