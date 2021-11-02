import React from "react";
import "./SectionTitle.css";

function SectionTitle(props) {
  return (
    <div className="section-title-container">
      <h1 className="section-title">{props.title}</h1>
    </div>
  );
}

export default SectionTitle;
