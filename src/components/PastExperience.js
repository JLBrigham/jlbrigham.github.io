import React from "react";
import "./PastExperience.css";

function PastExperience(props) {
  return (
    <div className="past-experience">
      <p className="job-title">{props.job}</p>
      <p className="job-company">
        {" "}
        <em>{props.company}</em>
      </p>
      <p className="job-skills">{props.content}</p>
    </div>
  );
}

export default PastExperience;
