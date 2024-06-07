import React from "react";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Description for Project 1",
    image:
      "https://t3.ftcdn.net/jpg/02/68/64/28/360_F_268642811_GZ1DZLoeqG9v5Sp7XRfZteGm0BbdHSKN.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description for Project 2",
    image:
      "https://t3.ftcdn.net/jpg/02/68/64/28/360_F_268642811_GZ1DZLoeqG9v5Sp7XRfZteGm0BbdHSKN.jpg",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description for Project 3",
    image:
      "https://t3.ftcdn.net/jpg/02/68/64/28/360_F_268642811_GZ1DZLoeqG9v5Sp7XRfZteGm0BbdHSKN.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects__title">My Projects</h2>
      <div className="projects__grid">
        {projects.map((project) => (
          <div key={project.id} className="projects__card">
            <img
              src={project.image}
              alt={project.title}
              className="projects__image"
            />
            <h3 className="projects__card-title">{project.title}</h3>
            <p className="projects__card-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
