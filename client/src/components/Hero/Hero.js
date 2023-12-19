import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__columns">
        <div className="hero__rows">
          <div className="hero__frontend-developer">
            <p>Frontend Developer</p>
          </div>
          <div className="hero__unleash-imagination-in-code">
            <p>Unleash Imagination in Code</p>
          </div>
          <button className="hero__contact-me">Contact Me</button>
        </div>
        <div className="hero__grid">
          <div className="hero__grid-item"></div>
          <div className="hero__grid-item"></div>
          <div className="hero__grid-item"></div>
          <div className="hero__grid-item"></div>
          <div className="hero__grid-item"></div>
          <div className="hero__grid-item"></div>
          <div className="hero__grid-item"></div>
          <div className="hero__grid-item"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
