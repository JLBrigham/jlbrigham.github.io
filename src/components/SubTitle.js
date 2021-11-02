import React from "react";
import "./SubTitle.css";

function SubTitle(props) {
  return (
    <div className="subheading-container">
      <p className="subheading-text">{props.text}</p>
    </div>
  );
}

export default SubTitle;
