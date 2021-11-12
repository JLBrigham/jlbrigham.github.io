import React from "react";
import SectionTitle from "./SectionTitle";
import PastExperience from "./PastExperience";
import SubTitle from "./SubTitle";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience" id="experience">
      <SectionTitle title={"Experience"} />
      <SubTitle
        text={
          "A snap-shot of my previous experience and education and the skills they've given me"
        }
      />
      <div className="past-experience-container">
        <div className="job-experience-container">
          <div className="job-experience-top-container">
            <PastExperience
              job={"Operations Executive + Airport Manager"}
              company={"Crystal Ski, TUI Group, 2017 - 2020"}
              content={
                "a can-do attitude • attention to detail • communication • team-work • resillience • calm under pressure"
              }
            />
            <PastExperience
              job={"Bed & Breakfast Sole Host"}
              company={"Alpes Travel, 2018 - Present"}
              content={
                "problem solving • initiative • customer service • time management and prioritisation • interpersonal skills"
              }
            />
          </div>
          <div className="job-experience-bottom-container">
            <PastExperience
              job={"Property Manager"}
              company={"Foxtons ltd, 2015 - 2017"}
              content={
                "logical thinking • mediation • problem solving • working to deadlines • building meaningful client relationships"
              }
            />
          </div>
        </div>
        <div className="makers-div">
          <PastExperience
            job={"Makers Academy"}
            company={"16 week intensive coding bootcamp"}
            content={
              "self-led learning • pair-programming • group engineering projects • agile/XP working practices • running stand-ups, retros, sprints, creating MVPs and user stories • key coding principles - MVC, OOP, TDD • code quality - DRY and SRP • Applied everything learnt in final group project where we learnt the MERN stack from scratch"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
