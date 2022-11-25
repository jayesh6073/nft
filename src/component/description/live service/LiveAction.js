import React from "react";
import Card from "./card";
import "./LiveAction.css";

function LiveAction(props) {
  return (
    <div>
      <div className="liveAction">
        <div className="liveAction-container">
          <div className="liveAction-row justify-content-space-between">
            <div className="t1">Live Auction</div>
            <div className="t2">View All </div>
          </div>
        </div>
      </div>

      <div className="Cards">
        <div className="liveAction-container">
          <div className="liveAction-row justify-content-space-evenly">
            <Card img="./img/s8.jpeg" />
            <Card img="./img/s9.jpeg" />
            <Card img="./img/s10.jpeg" />
            <Card img="./img/s8.jpeg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveAction;
