import React, { Fragment } from "react";
import "./HomePage.css";
import AboutSection from "./description/AboutSection.js";
import SignupInfo from "./description/signup-info/SignupInfo.js";
// import Slider from "./description/slider/Slider.js";
import Footer from "./footer/Footer.js";
import Header from "./header/Header.js";
import LiveAction from "./description/live service/LiveAction";

const HomePage = (props) => {
  return (
    <Fragment>
      <Header />
      <div className="bg-image">
        <AboutSection />
        <LiveAction />
      </div>
      {/* <Slider /> */}
      <SignupInfo />
      <Footer />
    </Fragment>
  );
};
export default HomePage;
