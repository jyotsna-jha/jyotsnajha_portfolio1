import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import React1 from "../assets/react.jpg";
import React2 from "../assets/react2.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>A Little About Me</h1>
        <p>
          I am an undergraduate currently pursuing bachelor's degree in
          Electronics, Communication and Information Engineering. I am a web development enthusiast.I love singing and I
          am also a melophile.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;

