import React from "react";
import "./About.css";

function About(props) {
  return (
    <div id="about" className="about">
      <img className="profile-pic" src={props.img} alt="avatar_img" />
      <h1 className="my-name">{props.name}</h1>
      <p className="intro-para">{props.intro}</p>
    </div>
  );
}

export default About;
