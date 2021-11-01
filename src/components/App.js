import React from "react";
import About from "./About";
import Header from "./Header";
import Skills from "./Skills";
import Blog from "./Blog";
import Hobbies from "./Hobbies";
import Projects from "./Projects";
import Experience from "./Experience";
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
            "I'm a junior full-stack engineer with a passion for front-end development. I'm currently looking for my first role in tech and would love to hear from you. \n\n I recently decided to make a career change from the travel and tourism industry to software engineering. I trained at Makers Academy, an intensive 4 month bootcamp. My background has given me a diverse range of skills and learning to code has taught me, that with a growth mindset, I have all the skills needed to learn whatever I put my mind to. I'm excited by the opportunity the tech industry will give me to continue to develop and learn. \n\n I'm based in Chamonix in the French Alps and love to spend my free time getting outside and exploring the mountains around me."
          }
        />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Hobbies />
      </div>
    </div>
  );
}

export default App;
