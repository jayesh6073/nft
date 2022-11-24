import React, { Fragment } from "react";
import "./HomePage.css";
import AboutSection from "./description/AboutSection.js";
import Home from "./description/Home.js";
import SignupInfo from "./description/signup-info/SignupInfo.js";
import Slider from "./description/slider/Slider.js";
import Footer from "./footer/Footer.js";
import Header from "./header/Header.js";

const HomePage = (props) => {
  return (
    <Fragment>
      <Header />
      <div className="bg-image">
        <Home />
        <AboutSection />
      </div>
      <Slider />
      <SignupInfo />
      <Footer />
    </Fragment>
  );
};
export default HomePage;
