import React from "react";
import Skill from "./Skill";
import TechSkill from "./TechSkill";
import "./Skills.css";

function Skills() {
  return (
    <div className="skills" id="skills">
      <div className="skills-title-container">
        <h1 className="skills-title">Skills - both soft and technical </h1>
      </div>
      <div className="skills-container">
        <div className="soft-skills-container">
          <Skill
            title={"Problem Solver + Logical Thinker"}
            content={
              "Whilst at Crystal Ski I implemented a new process for tracking staff movements. I identified this as an area for improvement as errors here were costing the company financially and risking compliance to local workplace laws. I analysed what was not working and came up with ways the process could be improved efficiently. The process I put together was subsequently also rolled out in our counterpart overseas offices. \n\nWhilst studying at Makers Academy I learnt that great problem solving skills are vital if you want to become a great developer. I have found that no matter how challenging a task may seem, there is no need to feel overwhelmed as it will be possible to break it down into smaller more manageable problems. A process I put into practice when building a dynamic user progress bar in my final project and documented in my blog. I've also learnt that knowing when, and not being afraid, to ask for help is a crucial part of problem solving whilst coding"
            }
          />
          <Skill
            title={"Effective Communicator + Team Worker"}
            content={
              "I have built personable client relationships both as a property manager and whilst working face-to-face with clients at the bed and breakfast I ran for two summers. There I built a collection of great ratings and reviews whilst hosting guests from all over the world. Working as part of an operations team, I learnt that to be successful it is vital to get colleagues from other teams and departments on board with your ideas, plans and processes. I became a valued member of the operations team at Crystal Ski, through engaging with my colleagues and taking time to understand their needs. To further advance my written communication skills, as well as improve my self-evaluation, I have started a blog to record my journey as a software developer. \n\nA lot of time was spent pair programming or working on group projects whilst studying at Makers, which I really enjoyed. Empathy whilst working with others was a particularly valuable skill that I demonstrated. During a two week group project, it quickly became apparent that team members had varied learning styles, wanted to move at different paces and had different ideas on what they wanted to get out of the project. All these aspects could have caused friction in the group, however we avoided this by deciding to set aside time for self-led learning. Taking time to understand how different team members worked best created more meaningful team relations promoting more effective team work and an all round happier team.."
            }
          />
          <Skill
            title={"Adaptable + Not Phased Under Pressure"}
            content={
              "Working at the airport for Crystal Ski I consistently proved myself during crisis situations and was consequently promoted to the airport management team. My adaptability meant I became a team member that could step into any role and be relied on to 'get things done' whilst we faced huge operational obstacles, such as overnighting 1000 guests in a very small, regional airport. My resilience, ability to keep calm and positive attitude were attributes I was regularly praised for by colleagues. \n\nAs part of my Makers final project we chose to learn an entirely new tech stack. With just two weeks to learn a new framework, design and build a full-stack mobile app and present our finished app, we were under a lot of time pressure. Working in sprints to manage our time effectively and using an agile workflow we were able to present a project we were proud of at the end of the two weeks. This was also made possible by ensuring we maintained positive team relations whilst working under pressure. We had daily stand-up and retros where we took the time to reflect on the progress we had made, I tried to focus on always having the bigger picture in mind, a skill I was commended for in my role at Crystal ski."
            }
          />
        </div>
        <div className="tech-skills-container">
          <h2>Tech I have experience with:</h2>
          <div className="tech-skills">
            <TechSkill skill={"HTML"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
