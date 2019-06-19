import React from "react";
import introLeft from "../../img/intro-left.jpg";
import introRight from "../../img/intro-right.jpg";
import linkedinLogo from "../../img/linkedin.png";
import twitterLogo from "../../img/twitter.png";
import "./intro.css";




const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-left">
        <img src={introLeft} alt="" />
      </div>
      <div className="intro-middle">
        <h2>{"Hi, I'm BK"}</h2>
        <p>{"Technology enthusiast, GIS specialist and full stack web developer."}</p>
        <div className="intro-social">
          <div className="intro-social-icons">
            <a
              className="intro-social-icon linkedin"
              href="https://www.linkedin.com/in/bhekanik/"
              target="_blank"
              alt="LinkedIn logo"
              rel="noopener noreferrer">
              <img src={linkedinLogo} alt="LinkedIn logo" target="_blank" />
            </a>
            <a
              className="intro-social-icon"
              href="https://twitter.com/bhekanik"
              target="_blank"
              alt="LinkedIn logo"
              rel="noopener noreferrer">
              <img src={twitterLogo} alt="Twitter logo" />
            </a>
          </div>
        </div>
      </div>
      <div className="intro-right">
        <img src={introRight} alt="" />
      </div>
    </section>
  );
};

export default Intro;
