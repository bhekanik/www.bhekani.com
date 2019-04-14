import React, { useEffect, useContext } from "react";

import "./projects.css";

import Project from "./Project/Project";
import { Context } from "../../App";

const Projects = () => {
  const dispatch = useContext(Context);

  useEffect(() => {
    dispatch({ type: "page", payload: "projects" });
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
