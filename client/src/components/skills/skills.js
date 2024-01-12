import React from "react";
import "./skills.css";
import html from "../Assets/html-5-svgrepo-com.svg";
import css from "../Assets/css-3-svgrepo-com.svg";
import sass from "../Assets/sass-svgrepo-com.svg";
import js from "../Assets/js-svgrepo-com.svg";
import react from "../Assets/react-svgrepo-com.svg";
import ts from "../Assets/typescript-icon-svgrepo-com.svg";
import git from "../Assets/git-svgrepo-com.svg";

const SkillsBlock = () => {
  return (
    <div className="skills-block">
      <h2 className="block-title">Skills</h2>
      <div className="skills__container">
        <div className="skills-item">
          <h3 className="item-title">Your Title</h3>
          <img src={html} alt="Icon" className="item-icon" />
        </div>
        <div className="skills-item">
          <h3 className="item-title">Your Title</h3>
          <img src={css} alt="Icon" className="item-icon" />
        </div>
        <div className="skills-item">
          <h3 className="item-title">Your Title</h3>
          <img src={sass} alt="Icon" className="item-icon" />
        </div>
        <div className="skills-item">
          <h3 className="item-title">Your Title</h3>
          <img src={js} alt="Icon" className="item-icon" />
        </div>
        <div className="skills-item">
          <h3 className="item-title">Your Title</h3>
          <img src={react} alt="Icon" className="item-icon" />
        </div>
        <div className="skills-item">
          <h3 className="item-title">Your Title</h3>
          <img src={ts} alt="Icon" className="item-icon" />
        </div>
        <div className="skills-item">
          <h3 className="item-title">Your Title</h3>
          <img src={git} alt="Icon" className="item-icon" />
        </div>
      </div>
    </div>
  );
};

export default SkillsBlock;
