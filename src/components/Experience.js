import React from "react";
import SectionTitle from "./SectionTitle";
import PastExperience from "./PastExperience";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience" id="experience">
      <SectionTitle title={"Experience - Work In Progress . . ."} />
      <div className="past-experience-container">
        <PastExperience
          job={"Operations Executive and Airport Manager"}
          company={"Crystal Ski- TUI Group"}
          content={
            "A very varied and unpredictable role where a can-do attitude was a must. In the office attention to detail was crucial as I managed high risk compliance areas related to staffing and was responsible for ensuring overseas staff were paid correctly, liaising with payroll and completing a monthly SPF. Promoted to part of the airport management team after my first winter, I oversaw the arrival/departure of 1500 guests each week. Faced many operational challenges where the ability to communicate clearly with both colleagues and clients was vital along with the ability to think clearly in stressful situations."
          }
        />
        <PastExperience
          job={"Bed & Breakfast Host"}
          company={"Alpes Travel"}
          content={
            "Solely responsible for managing all aspects of the day-to-day running of a bed and breakfast sleeping 10 guests, time management was crucial in order to meet guest expectations. Building relationships with guests from all over the world, I took time to understand their motivations and what they wanted from their holiday which ensured I received great feedback."
          }
        />

        <PastExperience
          job={"Property Manager"}
          company={"Foxtons ltd"}
          content={
            "A complex role which required me to use my analytical, logical and interpersonal skills to deal with all aspects of the residential tenancies, liaising with both landlords and tenants. I dealt with independent contractors to resolve maintenance issues as well as project managing large scale works such as refurbishment of properties. On a daily basis this relied on my problem solving skills and my ability to use my initiative and think on my feet as I was often required to work to tight deadlines. Trusted to take on the extra responsibility of a larger portfolio when required and successfully managed to consistently achieve the same high level of customer service for which I was often commended. Studied for and successfully passed the NFoPP Level 3 Technical Award in Residential Letting and Property Management."
          }
        />
      </div>
    </div>
  );
}

export default Experience;
