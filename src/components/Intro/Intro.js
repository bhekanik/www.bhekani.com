import React from "react";

import "./intro.css";

import introLeft from "../../img/intro-left.jpg";
import introRight from "../../img/intro-right.jpg";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-left">
        <img src={introLeft} alt="" />
      </div>
      <div className="intro-middle">
        <h2>{"Hi, I'm BK"}</h2>
        <p>{"I am a GIS Developer at ESRI South Africa."}</p>
      </div>
      <div className="intro-right">
        <img src={introRight} alt="" />
      </div>
    </section>
  );
};

export default Intro;
