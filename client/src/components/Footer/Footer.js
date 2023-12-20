import React, { useState } from "react";
import "./Footer.css";
import hello from "../Assets/hello.gif";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const sendDataToServer = () => {
    fetch("http://127.0.0.1:5000/api/send-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message, subject }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((responseData) => {
        console.log(responseData);
      })
      .catch((error) => {
        console.error("Ошибка:", error);
      });
  };
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
            id="subject"
            className="contact-me-form__input"
            placeholder="Subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <input
            type="email"
            id="email"
            className="contact-me-form__input"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            id="message"
            name="message"
            className="contact-me-form__textarea"
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button
            type="submit"
            className="contact-me-form__button"
            onClick={sendDataToServer}
          >
            Contact Me
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
