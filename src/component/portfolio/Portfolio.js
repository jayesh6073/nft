import React, { Fragment } from "react";
import Header from "../header/Header";
import PortfolioMinter from "./PortfolioMinter";
import "./Portfolio.css";

const Portfolio = (props) => {
  return (
    <Fragment>
      <Header />
      <div className="bg-image2">
        <div className="portfolio">
          <PortfolioMinter img="./img/po1.jpg" />
          <PortfolioMinter img="./img/po2.jpg" />
          <PortfolioMinter img="./img/po3.jpg" />
          <PortfolioMinter img="./img/po4.jpg" />
          <PortfolioMinter img="./img/po5.jpg" />
          <PortfolioMinter img="./img/po6.jpg" />
          <PortfolioMinter img="./img/po7.jpg" />
          <PortfolioMinter img="./img/po8.jpg" />
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
