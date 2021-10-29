import React from "react";
import "./TechSkill.css";

function TechSkill(props) {
  return (
    <div className="tech-skill">
      <p>{props.skill}</p>
    </div>
  );
}

export default TechSkill;
