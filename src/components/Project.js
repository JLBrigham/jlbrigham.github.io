import React from "react";

function Project(props) {
  return (
    <div className="project-container">
      {/* <img className="project-image" src={props.img} alt="project-image" /> */}
      <h3 className="project-title">{props.title}</h3>
      <p className="project-description">{props.description}</p>
    </div>
  );
}

export default Project;
