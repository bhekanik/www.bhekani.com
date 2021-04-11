import React from "react";
import { Link } from "react-router-dom";

import "./callToAction.css";

const CallToAction = () => {
  return (
    <div className="cta">
      <h2>Ready to start your own project?</h2>
      <h3>Let's have a chat.</h3>
      <Link to="/contact">Start the conversation</Link>
    </div>
  );
};

export default CallToAction;
