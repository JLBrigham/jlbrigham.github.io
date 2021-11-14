import React from "react";
import "./Hobby.css";

function Hobby(props) {
  return (
    <div className="hobby-container">
      <img
        id="hobby-image"
        className="hobby-image"
        src={props.img}
        alt="dogs"
        onClick={props.onClick}
      />
      <p className="hobby-description">{props.description}</p>
    </div>
  );
}

export default Hobby;
