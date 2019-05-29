import React from "react";

import "./footer.css";

import facebookLogo from "../../img/facebook.png";
import instagramLogo from "../../img/instagram.png";
import linkedinLogo from "../../img/linkedin.png";
import twitterLogo from "../../img/twitter.png";
import youtubeLogo from "../../img/youtube.png";

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <div className="social-icons">
          <a
            className="social-icon"
            href="https://www.facebook.com/bhekanik"
            target="_blank"
            alt="Facebook logo"
            rel="noopener noreferrer">
            <img src={facebookLogo} alt="Facebook logo" target="_blank" />
          </a>
          <a
            className="social-icon"
            href="https://instagram.com/bhekanik"
            target="_blank"
            alt="Instagram logo"
            rel="noopener noreferrer">
            <img src={instagramLogo} alt="Instagram logo" />
          </a>
          <a
            className="social-icon linkedin"
            href="https://www.linkedin.com/in/bhekanik/"
            target="_blank"
            alt="LinkedIn logo"
            rel="noopener noreferrer">
            <img src={linkedinLogo} alt="LinkedIn logo" target="_blank" />
          </a>
          <a
            className="social-icon"
            href="https://twitter.com/bhekanik"
            target="_blank"
            alt="Twitter logo"
            rel="noopener noreferrer">
            <img src={twitterLogo} alt="Twitter logo" />
          </a>
          <a
            className="social-icon"
            href="https://www.youtube.com/channel/UCNNaw5_xYuNle7jUU5Y8mmQ"
            target="_blank"
            alt="Youtube logo"
            rel="noopener noreferrer">
            <img src={youtubeLogo} alt="Youtube logo" />
          </a>
        </div>
      </div>

      <p className="copyright">
        &copy; Bhekani Khumalo - Official Website 2019
      </p>
    </footer>
  );
};

export default Footer;
