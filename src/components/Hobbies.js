import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import SubTitle from "./SubTitle";
import Hobby from "./Hobby";
import "./Hobbies.css";

function Hobbies() {
  const drawingArray = [
    "http://JLBrigham.github.io/joannabrigham/golfclub.jpeg",
    "http://JLBrigham.github.io/joannabrigham/doran.jpeg",
    "http://JLBrigham.github.io/joannabrigham/wayside.jpeg",
    "http://JLBrigham.github.io/joannabrigham/lauterbrunnen.jpeg",
  ];

  const [drawing, changeDrawingArray] = useState(drawingArray[1]);

  function changeDrawingImage() {
    const nextDrawing =
      drawingArray[Math.floor(Math.random() * drawingArray.length)];
    changeDrawingArray(nextDrawing);
  }

  return (
    <div className="hobbies" id="hobbies">
      <SectionTitle title={"Hobbies - Work in progress . . . "} />
      <SubTitle
        text={
          "A bit of what I get up to in my spare time, click on the images to see more"
        }
      />

      <div className="hobbies-container">
        <Hobby
          img={"http://JLBrigham.github.io/joannabrigham/dogs.jpeg"}
          description={
            "Hanging out with my dogs, two Boston Terriers named Norman and Ronnie"
          }
        />

        <Hobby
          img={drawing}
          description={
            "Drawing, painting and crafting using upcycled materials"
          }
          onClick={() => changeDrawingImage()}
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
