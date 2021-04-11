import React from "react";

import "./announcement.css";

const Announcement = () => {
  const closeAnnouncement = () => {
    const announcement = document.querySelector(".announcement");
    const nav = document.querySelector("nav");
    const announcementButton = document.querySelector(".announcement-button");

    console.log("Announcement:", announcement.style.height);

    if (announcement.style.display === "grid") {
      nav.style.marginTop = announcement.style.height + "px";
    }

    announcementButton.addEventListener("click", _ => {
      announcement.style.display = "none";
      nav.style.marginTop = "0";
    });
  };

  return (
    <div className="announcement">
      <p>
        The site is still under construction so don't be alarmed if you find
        parts that don't work right or have some lorem ipsum.
      </p>
      <button className="announcement-button" onClick={closeAnnouncement}>
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 30 17"
          height="17"
          width="30"
          fill="#ffffff"
          stroke="#ffffff">
          <g transform="translate(-15 -15)">
            <polygon
              className="st0"
              points="31.2,23.5 37,29.3 35.8,30.5 30,24.7 24.2,30.5 23,29.3 28.8,23.5 23,17.7 24.2,16.5 37,29.3 35.8,30.5 30,24.7 24.2,30.5 23,29.3 35.8,16.5 37,17.7"
            />
          </g>
        </svg>
      </button>
    </div>
  );
};

export default Announcement;
