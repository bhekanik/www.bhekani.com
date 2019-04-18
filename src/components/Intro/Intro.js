import React from "react";

import "./intro.css";

import introLeft from "../../img/intro-left.jpg";
import introRight from "../../img/intro-right.jpg";

import facebookLogo from "../../img/facebook.png";
import instagramLogo from "../../img/instagram.png";
import linkedinLogo from "../../img/linkedin.png";
import twitterLogo from "../../img/twitter.png";
import youtubeLogo from "../../img/youtube.png";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-left">
        <img src={introLeft} alt="" />
      </div>
      <div className="intro-middle">
        <h2>{"Hi, I'm BK"}</h2>
        <p>{"I am a GIS Developer at ESRI South Africa."}</p>
        <div className="intro-social">
          <div className="intro-social-icons">
            {/* <a
              className="intro-social-icon"
              href="https://www.facebook.com/bhekanik"
              target="_blank"
              rel="noopener noreferrer">
              <img src={facebookLogo} alt="" target="_blank" />
            </a>
            <a
              className="intro-social-icon"
              href="https://instagram.com/bhekanik"
              target="_blank"
              rel="noopener noreferrer">
              <img src={instagramLogo} alt="" />
            </a> */}
            <a
              className="intro-social-icon linkedin"
              href="https://www.linkedin.com/in/bhekanik/"
              target="_blank"
              rel="noopener noreferrer">
              <img src={linkedinLogo} alt="" target="_blank" />
            </a>
            <a
              className="intro-social-icon"
              href="https://twitter.com/bhekanik"
              target="_blank"
              rel="noopener noreferrer">
              <img src={twitterLogo} alt="" />
            </a>
            {/* <a
              className="intro-social-icon"
              href="https://www.youtube.com/channel/UCNNaw5_xYuNle7jUU5Y8mmQ"
              target="_blank"
              rel="noopener noreferrer">
              <img src={youtubeLogo} alt="" />
            </a> */}
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
