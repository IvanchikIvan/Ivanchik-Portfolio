import React from "react";
import "./Footer.css";
import hello from "../Assets/hello.gif";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="im-glad-to-answer-your-questions">
        <div className="im-glad-to-answer-your-questions__image-container">
          <img
            src={hello}
            className="im-glad-to-answer-your-questions__image"
            alt="Hello Gif"
          ></img>
        </div>
        <p className="im-glad-to-answer-your-questions__text">
          E-mail me, I'm always in touch!
        </p>
        <p className="made-by-Ivanchik">© 2023 — Made by Ivanchik</p>
      </div>
      <div className="contact-me-form-container">
        <form onSubmit={null} className="contact-me-form">
          <input
            type="text"
            id="name"
            className="contact-me-form__input"
            placeholder="Name"
            name="name"
            value={null}
            onChange={null}
            required
          />
          <input
            type="email"
            id="email"
            className="contact-me-form__input"
            placeholder="Email"
            name="email"
            value={null}
            onChange={null}
            required
          />
          <textarea
            id="message"
            name="message"
            className="contact-me-form__textarea"
            value={null}
            placeholder="Message"
            onChange={null}
            required
          />
          <button type="submit" className="contact-me-form__button">
            Contact Me
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
