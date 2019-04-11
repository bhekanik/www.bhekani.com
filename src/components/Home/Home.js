import React from "react";
import { Link } from "react-router-dom";

import "./home.css";

import arrow from "../../img/arrow.svg";
import html5Logo from "../../img/html5_logo.png";
import cssLogo from "../../img/css_logo.png";
import jsLogo from "../../img/js_logo.png";
import sassLogo from "../../img/sass_logo.png";
import pythonLogo from "../../img/python_logo.png";
import reactLogo from "../../img/react_logo.png";
import reactNativeLogo from "../../img/reactnative_logo.png";
import arcgisLogo from "../../img/arcgis_logo.png";
import gitLogo from "../../img/git_logo.png";
import olLogo from "../../img/ol_logo.png";

const Home = () => {
  return (
    <div>
      <div className="welcome parallax--bg" id="home">
        <h1>
          <span>Full Stack Web Developer, GIS Specialist & Civil Engineer</span>
          <p>
            I create impactful and feature driven applications to help
            businesses make a statement. I work as a GIS Developer at ESRI South
            Africa and I am dedicated to building intuitive, well-designed
            software.
          </p>
        </h1>
        <img className="welcome-down" src={arrow} alt="" />
      </div>
      <div className="tech">
        <h2>Working with the newest technology.</h2>
        <p>
          My philosophy is that all applications should be modern and intuitive
          whether they are for mobile or desktop. I take pride in my knowledge
          in a variety of different technologies to build whatever - whenever.
        </p>
        <div class="technologies__items">
          <img src={html5Logo} alt="HTML5" class="tech__logo" />
          <img src={cssLogo} alt="CSS3" class="tech__logo" />
          <img src={jsLogo} alt="JavaScript" class="tech__logo" />
          <img src={sassLogo} alt="SASS/SCSS" class="tech__logo" />
          <img src={pythonLogo} alt="Python" class="tech__logo" />
          <img src={reactLogo} alt="ReactJS" class="tech__logo" />
          <img src={reactNativeLogo} alt="React Native" class="tech__logo" />
          <img
            src={arcgisLogo}
            alt="ArcGIS JavaScript API"
            class="tech__logo"
          />
          <img src={gitLogo} alt="GIT" class="tech__logo" />
          <img src={olLogo} alt="OpenLayers" class="tech__logo" />
        </div>
      </div>
      <div className="cta">
        <h2>Ready to start your own project?</h2>
        <h3>Let's have a chat.</h3>
        <Link to="/contact">Start the conversation</Link>
      </div>
    </div>
  );
};

export default Home;
