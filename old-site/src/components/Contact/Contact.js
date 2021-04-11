import React, { useEffect, useContext } from "react";

import "./contact.css";
import { Context } from "../../App";

const Contact = () => {
  const dispatch = useContext(Context);

  useEffect(() => {
    dispatch({ type: "page", payload: "contact" });
    dispatch({
      type: "nav",
      payload: {
        navBackgroundColor: "white",
        contactLinkColor: "#e8e9eb",
        homeLinkColor: "#223843",
        aboutLinkColor: "#223843",
        projectsLinkColor: "#223843",
        boxShadow: "0 10px 10px -10px rgba(0, 0, 0, 0.5)"
      }
    });
  }, []);

  return (
    <section className="contact" id="contact">
      <h1>Contact Me</h1>
      <form
        name="contact"
        method="POST"
        action="/success"
        >
        <input type="hidden" name="form-name" value="rsvp" />
        <input type="hidden" name="bot-field" />

        <label className="name">
          Name:
          <input type="text" id="name" name="name" required />
        </label>

        <label className="email">
          Email:
          <input type="email" id="email" name="email" required />
        </label>

        <label className="message">
          Message:
          <textarea name="message" id="message" required />
        </label>

        <input className="button form-button" type="submit" value="SEND" />
      </form>
    </section>
  );
};

export default Contact;
