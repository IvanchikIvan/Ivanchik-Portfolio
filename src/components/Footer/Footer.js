import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="contact-me-form-container">
        <form onSubmit={null} className="contact-me-form">
          <input
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            value={null}
            onChange={null}
            required
          />
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={null}
            onChange={null}
            required
          />
          <input
            id="message"
            name="message"
            value={null}
            placeholder="Message"
            onChange={null}
            required
          />
          <button type="submit">Contact Me</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
