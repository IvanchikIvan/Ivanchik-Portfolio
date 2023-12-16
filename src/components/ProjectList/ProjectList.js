import React from "react";
import "./ProjectList.css";
import chess from "../Assets/chess-icon.svg";
import gist_site_icon from '../Assets/gift-site.png'

const projects = [
  {
    title: "Chess",
    description:
      "A small project for learning TypeScript. The functionality of the chess game is implemented, a window with eaten pieces and a window of logs of pieces movements",
    image: chess,
    link: "https://example.com/project1",
  },
  {
    title: "Stands Wiki",
    description: "Stands Wiki is my crazy project ",
    image: gist_site_icon,
    link: "https://example.com/project2",
  },
  {
    title: "Личный блог",
    description: "Разработка личного блога с использованием Node.js и Express.",
    image: "project3.jpg",
    link: "https://example.com/project3",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio" id="projects">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
