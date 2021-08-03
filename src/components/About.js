import React from "react";

function About(props) {
  return (
    <div id="about">
      <img src={props.img} alt="avatar_img" />
      <h1>{props.name}</h1>
      <p>{props.intro}</p>
    </div>
  );
}

export default About;
