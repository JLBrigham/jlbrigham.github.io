import React from "react";
import "./Hobby.css";

// function changeImage(image) {

// }

// var dogsImageArray =

// var drawingImageArray = ["/golfclub.jpeg", "/lauterbrunnen.jpeg", "/wayside.jpeg" , "doran.jpeg"]

// var outdoorsImageArray =

function Hobby(props) {
  return (
    <div className="hobby-container">
      <img
        id="hobby-image"
        className="hobby-image"
        src={props.img}
        alt="dogs"
      />
      <p className="hobby-description">{props.description}</p>
    </div>
  );
}

export default Hobby;
