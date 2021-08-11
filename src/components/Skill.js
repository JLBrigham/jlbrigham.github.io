import React, { useState } from "react";
import "./Skill.css";

function Skill(props) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="skill">
      <div className="skill-item">
        <div className="skill-title" onClick={() => setIsActive(!isActive)}>
          <div>{props.title}</div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="skill-content">{props.content}</div>}
      </div>
    </div>
  );
}

export default Skill;
