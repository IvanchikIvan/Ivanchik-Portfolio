import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <div className="navbar-top">
        <div
          className={isMenuOpen ? "menu-icon active" : "menu-icon"}
          onClick={toggleMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className="navbar-right">
          <div className="name">
            <span>&lt; </span>
            <span>Ivanchik</span>
            <span> /&gt;</span>
          </div>
        </div>
      </div>
      <div className="navbar-left">
        <div className="navbar-left-items">
          <div className="nav-item"><a href="#chat">About me</a></div>
          <div className="nav-item"><a href="#footer">Contact</a></div>
          <div className="nav-item"><a href="#projects">Projects</a></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
