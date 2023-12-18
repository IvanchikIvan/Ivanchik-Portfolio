import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="columns">
        <div className="rows">
          <div className="frontend-developer">
            <p>Frontend Developer</p>
          </div>
          <div className="unleash-imagination-in-code">
            <p>Unleash Imagination in Code</p>
          </div>
          <button className="contact-me">Contact Me</button>
        </div>
        <div className="grid">
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
            <div className="grid-item"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
