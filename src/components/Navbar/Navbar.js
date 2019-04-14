import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

const Navbar = props => {
  const { navbackgroundColor, linkColor, boxShadow } = props;

  return (
    <nav
      className="navbar"
      style={{ background: navbackgroundColor, boxShadow: boxShadow }}>
      <ul>
        <li>
          <Link style={{ color: linkColor }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={{ color: linkColor }} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link style={{ color: linkColor }} to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link style={{ color: linkColor }} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
