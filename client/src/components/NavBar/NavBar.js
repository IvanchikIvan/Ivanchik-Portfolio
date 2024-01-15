import React, { useState } from "react";
import "./NavBar.css";
import ThemeProvider from "../light_dart_theme/themeProvider";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? "navbar--open" : ""}`}>
      <div className="navbar__top">
        <div
          className={isMenuOpen ? "menu-icon menu-icon--active" : "menu-icon"}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="navbar__right">
          <div className="theme-btn">
            <ThemeProvider/>
          </div>
          <div className="name">
            <span>&lt; </span>
            <span>Ivanchik</span>
            <span> /&gt;</span>
          </div>
        </div>
      </div>
      <div className="navbar__left">
        <div className="navbar__left-items">
          <div className="nav-item"><a href="#chat">About me</a></div>
          <div className="nav-item"><a href="#footer">Contact</a></div>
          <div className="nav-item"><a href="#projects">Projects</a></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
