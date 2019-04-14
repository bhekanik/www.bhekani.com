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
        <h2>Hi, I'm Bhekani</h2>
        <p>
          A passionate developer, civil engineer and GIS specialist who believes
          in continuous growth.
        </p>
      </div>
      <div className="intro-right">
        <img src={introRight} alt="" />
      </div>
    </section>
  );
};

export default Intro;
