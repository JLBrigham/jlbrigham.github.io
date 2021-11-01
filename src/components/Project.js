import React from "react";
import "./Project.css";

function Project(props) {
  return (
    <div className="project-container">
      <img className="project-image" src={props.img} alt="project-logo" />
      <h2 className="project-title">{props.title}</h2>
      <p className="project-description">{props.description}</p>
    </div>
  );
}

export default Project;
