import React from "react";

import "./projects.css";

import Project from "./Project/Project";

const Projects = () => {
  return (
    <section className="portfolio" id="portfolio">
      <h1>Some of my work</h1>
      <div className="portfolio-items">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
};

export default Projects;
