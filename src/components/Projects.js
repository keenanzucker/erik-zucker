import React from "react";
import "./Projects.css";
import projects from "../assets/projects.json";

function Projects() {
  return (
    <div className="projectsContainer">
      <div className="experiencesSection">
        <h2 className="projectsSectionTitle">Professional Experience</h2>
      </div>
      <div className="projectsCardGrid">
        {projects.map((project, index) => (
          <div key={index} className="projectCard">
            <div
              className="projectImage"
              style={{
                backgroundImage: `url(${require(`../assets/${project.imageUrl}`)})`,
              }}
            />
            <div className="projectCardContent">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="projectButton">
                {project.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
