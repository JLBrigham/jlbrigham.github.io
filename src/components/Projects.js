import React from "react";
import Project from "./Project";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects-title-container">
        <h1 className="projects-title">Projects - Coming Soon . . .</h1>
      </div>
      <div className="projects-container">
        <Project
          //   img={"Image to be sourced"}
          title={"Grappitude"}
          description={"Brief description of project and tech used"}
        />
      </div>
    </div>
  );
}

export default Projects;
