import React from "react";

function Skill(props) {
  return (
    <div className="skill">
      <div className="skill-item">
        <div className="skill-title">
          <div>{props.title}</div>
          <div>+</div>
        </div>
        <div className="skill-content">{props.content}</div>
      </div>
    </div>
  );
}

export default Skill;
