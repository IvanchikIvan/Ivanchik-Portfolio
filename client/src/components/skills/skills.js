import React from "react";
import "./skills.css";
import html from "../Assets/html-5-svgrepo-com.svg";
import css from "../Assets/css-3-svgrepo-com.svg";
import sass from "../Assets/sass-svgrepo-com.svg";
import js from "../Assets/js-svgrepo-com.svg";
import react from "../Assets/react-svgrepo-com.svg";
import ts from "../Assets/typescript-icon-svgrepo-com.svg";
import git from "../Assets/git-svgrepo-com.svg";
import webpack from "../Assets/webpack.svg";

const SkillsBlock = () => {
  return (
    <div className="skills-block">
      <h2 className="block-title">Skills</h2>
      <div className="skills__container">
        <div className="skills-item">
          <h3 className="item-title">HTML</h3>
          <img src={html} alt="Icon" className="item-icon" />
        </div>
        <div className="skills-item">
          <h3 className="item-title">CSS</h3>
          <img src={css} alt="Icon" className="item-icon" />
        </div>
        <div className="skills-item">
          <h3 className="item-title">SASS</h3>
          <img src={sass} alt="Icon" className="item-icon" />
        </div>
        <div className="skills-item">
          <h3 className="item-title">JavaScript</h3>
          <img src={js} alt="Icon" className="item-icon" />
        </div>
        <div className="skills-item">
          <h3 className="item-title">React JS</h3>
          <img src={react} alt="Icon" className="item-icon" />
        </div>
        <div className="skills-item">
          <h3 className="item-title">TypeScript</h3>
          <img src={ts} alt="Icon" className="item-icon" />
        </div>
        <div className="skills-item">
          <h3 className="item-title">Git</h3>
          <img src={git} alt="Icon" className="item-icon" />
        </div>
        <div className="skills-item">
          <h3 className="item-title">WebPack</h3>
          <img src={webpack} alt="Icon" className="item-icon" />
        </div>
      </div>
    </div>
  );
};

export default SkillsBlock;
