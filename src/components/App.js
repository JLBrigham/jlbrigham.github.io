import React from "react";
import About from "./About";
import Header from "./Header";
import Skills from "./Skills";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <About
        img={"/profile-photo.jpg"}
        name={"Joanna Brigham"}
        intro={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consequat tempor mollis. Curabitur lectus purus, accumsan et justo volutpat, consequat pulvinar neque. Sed fermentum orci consectetur nunc sodales, eget mattis massa eleifend. Nunc sollicitudin leo orci, in egestas nibh posuere ac. Curabitur lobortis quis ex a tempus. Nulla tempus venenatis arcu, vitae vestibulum neque bibendum sit amet. Curabitur dui augue, cursus pellentesque dictum eu, convallis quis urna. Etiam ac lacus in tellus semper dapibus sed a orci. Nam laoreet varius turpis, eget vulputate neque lobortis quis. Morbi vel porta purus."
        }
      />
      <Skills />
    </div>
  );
}

export default App;
