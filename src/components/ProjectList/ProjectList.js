import React from "react";
import "./ProjectList.css";
import standswiki from "../Assets/standswiki.png";
import gist_site_icon from '../Assets/gift-site.png'

const projects = [
  {
    title: "Site-Gift for girlfriend",
    description:
      "",
    image: gist_site_icon,
    link: "https://example.com/project1",
  },
  {
    title: "Stands Wiki",
    description: "",
    image: standswiki,
    link: "https://example.com/project2",
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
