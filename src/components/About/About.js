import React, { useEffect, useContext } from "react";

import CallToAction from "../CallToAction/CallToAction";
import { Context } from "../../App";

import "./about.css";

const About = () => {
  const dispatch = useContext(Context);

  useEffect(() => {
    dispatch({ type: "page", payload: "about" });
    dispatch({
      type: "nav",
      payload: {
        navBackgroundColor: "white",
        linkColor: "#223843",
        boxShadow: "0 10px 10px -10px rgba(0, 0, 0, 0.5)"
      }
    });
  }, []);

  return (
    <>
      <section className="about-me" id="about">
        <img
          className="about-img"
          src="https://lh3.googleusercontent.com/orhVTdfYvDkPe0Yasym11q-t7qGZ-4GujjBcq4k3TzoiixUexvDFj_7Y1HK5TKoBcby0eO4uEjnyOE-R62fThIxbxsiS8v1iMi898K3kMJCqdWGMLFsGqCWO7OgbGJEpJUqBNXW61Xo=w2400"
          alt=""
        />
        <h1 className="about-title">About me</h1>
        <h2 className="about-subtitle">
          {"Software Developer, GIS Specialist & Civil Engineer."}
        </h2>
        <div className="about-text">
          <p>
            {
              "I am a Software Developer with a background as a Civil Engineer and Geographic Information Systems (GIS). I have traceable work in GIS, software development and engineering – including project management, data collection, analysis, and publishing. I recently wrote an "
            }
            <a href="https://www.offerzen.com/blog/what-civil-engineering-taught-me-about-being-a-good-software-developer">
              article
            </a>
            {
              "on what Civil Engineering taught me about being a good software developer."
            }
          </p>
          <p>
            {
              "I am very passionate about learning so I have no big loyalty to any technology. However, I am proficient in JavaScript, NodeJS, Python, React, React Native and HTML/CSS and I'm currently expanding my skills in ASP.NET and C#. "
            }
          </p>
              
          <p> 
            {
              " I really love working with geo-spatial technologies because it offers the opportunity to interact with many kinds of problems from different fields. Because of that love, I have worked as a consultant on for the City of Harare, Zimbabwe in establishing their GIS department during the "
              }
            <a href="https://www.giz.de/en/html/index.html">GIZ</a>
            {" supervised "}
            <a href="https://www.muenchen.de/rathaus/Stadtpolitik/Partnerstaedte/Harare/Staedtische_Projekte/kooperationsprojekt.html">
              ZIGESA Trialogue
            </a>
            {" in 2015 which was later extended under "}
            <a href="https://skew.engagement-global.de/funding-from-the-nakopa-programme.html">
              Nakopa
            </a>
            {
              " funding in 2015 - 2016. I also gave a talk titled Water Demand Analysis using GIS at the 2015 ESRI Africa User Conference in Cape Town, South Africa based on some work I had done as a water engineer at the "
            }
            <a href="http://citybyo.co.zw/">City of Bulawayo.</a>
          </p>
          <p>
            {
              "Besides software development, engineering and GIS. I am a sketch artist and painter, you can find some of my work on "
            }
            <a href="https://www.deviantart.com/bhekanik">DeviantArt</a>
            {". I am also a co-host of the "}
            <a href="https://anchor.fm/justlivinlife">
              Just Livin' Life podcast
            </a>
            {" and the "}
            <a href="https://www.youtube.com/channel/UCNNaw5_xYuNle7jUU5Y8mmQ">
              Just Livin' Life YouTube channel
            </a>
            {
              " where my fiancee and I talk about all things relationships along with other topics that interest us."
            }
          </p>
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default About;
