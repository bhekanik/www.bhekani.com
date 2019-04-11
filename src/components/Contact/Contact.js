import React from "react";

import "./contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1>Contact Me</h1>
      <form name="contact" method="POST" data-netlify="true" action="./">
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
