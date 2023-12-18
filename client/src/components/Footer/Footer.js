import React from "react";
import "./Footer.css";
import hello from "../Assets/hello.gif";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="im-glad-to-answer-your-questions">
        <div className="im-glad-to-answer-your-questions-image__container">
          <img src={hello} className="im-glad-to-answer-your-questions__image"></img>
        </div>
        <p>E-mail me, I'm always in touch!</p>
        <p className="made-by-Ivanchik">© 2023 — Made by Ivanchik</p>
      </div>
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
