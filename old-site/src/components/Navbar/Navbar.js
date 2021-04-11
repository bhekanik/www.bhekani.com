import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../App";

import "./navbar.css";

const Navbar = props => {
    const dispatch = useContext(Context);
    const { navbackgroundColor, homeLinkColor, aboutLinkColor, projectsLinkColor, contactLinkColor, boxShadow, page } = props;
  
    const handleHover = (link, coloOfLink) => {
      const linkDispatch = (dispatchType, linkColor) => {      
        dispatch({
          type: dispatchType,
          payload: {
            linkColor
          }
        });
      }
  
      if (page !== "home") {
        if (link === "home") {
          linkDispatch("homeLink", coloOfLink);
        } else if (link === "about") {
          linkDispatch("aboutLink", coloOfLink);
        } else if (link === "contact") {        
          linkDispatch("contactLink", coloOfLink);
        } else if (link === "projects") {        
          linkDispatch("projectsLink", coloOfLink);
        }
      } else {
        if (window.outerWidth > 800) {
          if (
            document.querySelector(".intro").getBoundingClientRect().top - 60 <=
            0
          ) {
            if (link === "home") {
              linkDispatch("homeLink", coloOfLink);
            } else if (link === "about") {
              linkDispatch("aboutLink", coloOfLink);
            } else if (link === "contact") {        
              linkDispatch("contactLink", coloOfLink);
            } else if (link === "projects") {        
              linkDispatch("projectsLink", coloOfLink);
            }
          }
        } else {
          if (link === "home") {
            linkDispatch("homeLink", coloOfLink);
          } else if (link === "about") {
            linkDispatch("aboutLink", coloOfLink);
          } else if (link === "contact") {        
            linkDispatch("contactLink", coloOfLink);
          } else if (link === "projects") {        
            linkDispatch("projectsLink", coloOfLink);
          }
        }
      }
    }

  return (
    <nav
      className="navbar"
      style={{ background: navbackgroundColor, boxShadow: boxShadow }}>
      <ul>
        <li onClick={() => handleHover("home", "#e8e9eb")} onMouseEnter={() => handleHover("home", "#e8e9eb")} onMouseLeave={() => handleHover("home", "#223843")}>
          <Link style={{ color: homeLinkColor }} to="/">
            Home
          </Link>
        </li>
        <li onClick={() => handleHover("about", "#e8e9eb")} onMouseEnter={() => handleHover("about", "#e8e9eb")} onMouseLeave={() => handleHover("about", "#223843")}>
          <Link style={{ color: aboutLinkColor }} to="/about">
            About
          </Link>
        </li>
        <li onClick={() => handleHover("projects", "#e8e9eb")} onMouseEnter={() => handleHover("projects", "#e8e9eb")} onMouseLeave={() => handleHover("projects", "#223843")}>
          <Link style={{ color: projectsLinkColor }} to="/projects">
            Projects
          </Link>
        </li>
        <li onClick={() => handleHover("contact", "#e8e9eb")} onMouseEnter={() => handleHover("contact", "#e8e9eb")} onMouseLeave={() => handleHover("contact", "#223843")}>
          <Link style={{ color: contactLinkColor }} to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
