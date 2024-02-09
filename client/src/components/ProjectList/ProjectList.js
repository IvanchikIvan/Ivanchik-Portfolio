import React from "react";
import "./ProjectList.css";
import standswiki from "../Assets/standswiki.png";
import gist_site_icon from "../Assets/gift-site.png";
import snippets from "../Assets/snippets.png";
import { animated, useInView } from "react-spring";

const projects = [
  {
    title: "Site-Gift for girlfriend",
    description: "",
    image: gist_site_icon,
    link: "https://github.com/Kavalskiy/FriendShip-History-site",
  },
  {
    title: "Stands Wiki",
    description: "",
    image: standswiki,
    link: "https://example.com/project2",
  },
  {
    title: "",
    description: "Snippets",
    image: snippets,
    link: "https://github.com/Kavalskiy/snippets",
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
      <h2 className="portfolio__title">Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <animated.div className="project" key={index} style={projectStyles} ref={projectRef}>
            <a href={project.link}><img className="project__image" src={project.image} alt={project.title} /></a>
            <div className="project__info">
              <h3 className="project__title">{project.title}</h3>
              <p className="project__description">{project.description}</p>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
