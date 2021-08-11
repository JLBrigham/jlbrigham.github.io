import React from "react";
import Skill from "./Skill";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>This is a test skills section for testing the navbar</h1>
      <Skill
        title={"Problem solving"}
        content={"details on why im a good problem solver"}
      />
    </div>
  );
}

export default Skills;
