import React, { useContext, useEffect } from "react";

import Intro from "../Intro/Intro";
import CallToAction from "../CallToAction/CallToAction";
import { Context } from "../../App";

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

const Home = props => {
  const dispatch = useContext(Context);

  const changeNavStyle = () => {
    if (document.querySelector(".intro").getBoundingClientRect().top - 60 > 0) {
      dispatch({
        type: "nav",
        payload: {
          navBackgroundColor: "transparent",
          linkColor: "#e8e9eb",
          boxShadow: "none"
        }
      });
    } else {
      dispatch({
        type: "nav",
        payload: {
          navBackgroundColor: "white",
          linkColor: "#223843",
          boxShadow: "0 10px 10px -10px rgba(0, 0, 0, 0.5)"
        }
      });
    }
  };

  useEffect(() => {
    dispatch({ type: "page", payload: "home" });

    changeNavStyle();

    window.addEventListener("scroll", changeNavStyle);

    return () => {
      window.removeEventListener("scroll", changeNavStyle);
    };
  }, []);

  const smoothScroll = (targetSelector, duration) => {
    const target = document.querySelector(targetSelector);
    const targetPosition = target.getBoundingClientRect().top - 50;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = currentTime => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };

  const smoothScrollRunner = () => {
    smoothScroll(".intro", 1000);
  };

  return (
    <div>
      <div className="welcome parallax--bg" id="home">
        <h1>
          <span>
            {"Full Stack Web Developer, GIS Specialist & Civil Engineer"}
          </span>
          <p>
            {
              "I create impactful and feature driven applications to help businesses make a statement. I work as a GIS Developer at ESRI South Africa and I am dedicated to building intuitive, well-designed software."
            }
          </p>
        </h1>
        <img
          className="welcome-down"
          src={arrow}
          alt=""
          onClick={smoothScrollRunner}
        />
      </div>
      <Intro />
      <div className="tech">
        <h2>{"Working with the newest technology."}</h2>
        <p>
          {
            "My philosophy is that all applications should be modern and intuitive whether they are for mobile or desktop. I take pride in my knowledge in a variety of different technologies to build whatever - whenever."
          }
          "
        </p>
        <div className="technologies__items">
          <img src={html5Logo} alt="HTML5" className="tech__logo" />
          <img src={cssLogo} alt="CSS3" className="tech__logo" />
          <img src={jsLogo} alt="JavaScript" className="tech__logo" />
          <img src={sassLogo} alt="SASS/SCSS" className="tech__logo" />
          <img src={pythonLogo} alt="Python" className="tech__logo" />
          <img src={reactLogo} alt="ReactJS" className="tech__logo" />
          <img
            src={reactNativeLogo}
            alt="React Native"
            className="tech__logo"
          />
          <img
            src={arcgisLogo}
            alt="ArcGIS JavaScript API"
            className="tech__logo"
          />
          <img src={gitLogo} alt="GIT" className="tech__logo" />
          <img src={olLogo} alt="OpenLayers" className="tech__logo" />
        </div>
      </div>
      <CallToAction />
    </div>
  );
};

export default Home;
