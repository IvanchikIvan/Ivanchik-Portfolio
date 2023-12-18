import React from "react";
import "./ProjectList.css";
import standswiki from "../Assets/standswiki.png";
import gist_site_icon from "../Assets/gift-site.png";
import { animated, useInView } from "react-spring";

const projects = [
  {
    title: "Site-Gift for girlfriend",
    description: "",
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
  const [projectRef, projectStyles] = useInView(
    () => ({
      from: {
        opacity: 0,
        x: -200,
      },
      to: {
        opacity: 1,
        x: 0,
      },
    }),
    {
      rootMargin: "-20% 0%",
    }
  );

  return (
    <div className="portfolio" id="projects">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <animated.div className="project" key={index} style={projectStyles} ref={projectRef}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
