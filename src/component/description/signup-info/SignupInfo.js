import React from "react";
import "./SignupInfo.css";

const SignupInfo = (props) => {
  return (
    <div className="signup-container">
      <div className="signup-row">
        <div className="signup-heading">
          <h1>Get Started in three Steps</h1>
        </div>
        <div className="signup-content">
          <div className="signup-content-s1">
            <div className="signup-content-s1-stepno">
              <h4>01</h4>
              <div className="solid-icon"></div>
            </div>
            <div className="signup-content-s1-stepinfo">
              <h4>Download</h4>
              <span>
                I'm a paragraph. Click here to add your <br />
                own text and edit me.Let your users <br />
                get to know you.
              </span>
            </div>
          </div>
          <div className="signup-content-s2">
            <div className="signup-content-s1-stepno">
              <h4>02</h4>
              <div className="solid-icon"></div>
            </div>
            <div className="signup-content-s1-stepinfo">
              <h4>Sign Up</h4>
              <span>
                I'm a paragraph. Click here to add your <br />
                own text and edit me.Let your users <br />
                get to know you.
              </span>
            </div>
          </div>
          <div className="signup-content-s3">
            <div className="signup-content-s1-stepno">
              <h4>03</h4>
              <div className="solid-icon"></div>
            </div>
            <div className="signup-content-s1-stepinfo">
              <h4>Purchase</h4>
              <span>
                I'm a paragraph. Click here to add your <br />
                own text and edit me.Let your users <br />
                get to know you.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignupInfo;
