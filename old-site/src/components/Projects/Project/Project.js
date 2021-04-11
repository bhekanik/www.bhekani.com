import React from "react";

import "./project.css";

const Project = ({
  name,
  imageSource,
  demoUrl,
  demoAvailable,
  code,
  codeAvailable
}) => {
  return (
    <figure className="portfolio__port-item">
      <img src={imageSource} alt="portfolio-item" />
      <figcaption className="portfolio__port-desc">
        <p>{name}</p>
        {demoAvailable ? (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="project1Button"
            className="portfolio_btn btn btn-accent btn-small">
            Demo
          </a>
        ) : (
          <span>Licensing restrictions on demo. </span>
        )}
        {codeAvailable ? (
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            id="project1Button"
            className="portfolio_btn btn btn-accent btn-small">
            Code
          </a>
        ) : (
          <span>Licensing restrictions on code.</span>
        )}
      </figcaption>
    </figure>
  );
};

export default Project;
