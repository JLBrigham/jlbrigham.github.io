import React, { useState } from "react";
import "./PastExperience.css";

function PastExperience(props) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="past-experience">
      <div className="experience-item">
        <div
          className="experience-title"
          onClick={() => setIsActive(!isActive)}
        >
          <div>
            <h3 className="job-title">{props.job}</h3>
            <p className="job-company">{props.company}</p>
          </div>
          <div>{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="experience-content">{props.content}</div>}
      </div>
    </div>
  );
}

export default PastExperience;
