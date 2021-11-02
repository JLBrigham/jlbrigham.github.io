import React from "react";
import SectionTitle from "./SectionTitle";
import SubTitle from "./SubTitle";
import Hobby from "./Hobby";
import "./Hobbies.css";

function Hobbies() {
  return (
    <div className="hobbies" id="hobbies">
      <SectionTitle title={"Hobbies - Work in progress . . . "} />
      <SubTitle text={"A bit of what I get up to in my spare time"} />

      <div className="hobbies-container">
        <Hobby
          img={"http://JLBrigham.github.io/joannabrigham/public/dogs.jpeg"}
          description={
            "Hanging out with my dogs, two Boston Terriers named Norman and Ronnie"
          }
        />
        <Hobby
          img={"http://JLBrigham.github.io/joannabrigham/golfclub.jpeg"}
          description={
            "Drawing, painting and crafting using upcycled materials"
          }
        />
        <Hobby
          img={"http://JLBrigham.github.io/joannabrigham/lesgets.jpeg"}
          description={
            "In the summer I love to hike, trail run and wild camp. In the winter I ski and ski tour."
          }
        />
      </div>
    </div>
  );
}

export default Hobbies;
