import React from "react";
import SectionTitle from "./SectionTitle";
import PastExperience from "./PastExperience";
import SubTitle from "./SubTitle";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience" id="experience">
      <SectionTitle title={"Experience - Work In Progress . . ."} />
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
                "A can-do attitude, attention to detail, communication, team-work, resillience, calm under pressure."
              }
            />
            <PastExperience
              job={"Bed & Breakfast Sole Host"}
              company={"Alpes Travel, 2018 - Present"}
              content={
                "Problem solving, customer service, time management and prioritisation, interpersonal skills,"
              }
            />
          </div>
          <div className="job-experience-bottom-container">
            <PastExperience
              job={"Property Manager"}
              company={"Foxtons ltd, 2015 - 2017"}
              content={
                "Logical thinking, mediation, problem solving, working to deadlines, building meaningful client relationships"
              }
            />
          </div>
        </div>
        <div className="makers-div">
          <PastExperience
            job={"Makers Academy"}
            company={"16 week intensive coding bootcamp"}
            content={
              "Combination of self-led learning, workshops and extensive pair programming with peers,Group engineering projects using Agile/XP working practices to work more efficiently. Running stand-ups, retros, sprints, creating MVPs and user stories, Learnt how to follow key coding principles - MVC, OOP, TDD - and practice these on each project. Emphasis on code quality - DRY and SRP. Completely self-led final project, as a group we taught ourselves React Native and MongoDB from scratch and created an app we were proud to present in just 2 weeks"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
