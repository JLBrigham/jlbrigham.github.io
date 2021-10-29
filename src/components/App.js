import React from "react";
import About from "./About";
import Header from "./Header";
import Skills from "./Skills";
import Blog from "./Blog";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <About
          img={"/profile-photo.jpg"}
          name={"Joanna Brigham"}
          intro={
            "Hi, I'm a junior full-stack engineer with a passion for front-end development. I'm currently looking for my first role in tech and would love to hear from you. \n\n I'm based in Chamonix, France."
          }
        />
        <Skills />
        <Blog />
      </div>
    </div>
  );
}

export default App;
