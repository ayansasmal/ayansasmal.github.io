import React from "react";
import Classes from "./Skills.module.css";
import Title from "../../UI/Title/Title";
import BarGraph from "./BarGraph/BarGraph";
import SkillGroup from "./SkillGroup/SkillGroup";

const barData = [
  { label: "Full Stack Developer", score: "25" },
  { label: "ReactJS", score: "35" },
  { label: "AngularJS", score: "35" },
  { label: "Node.js", score: "30" },
  { label: "Javascript", score: "60" },
  { label: "Spring Boot/Framework", score: "75" },
  { label: "Java", score: "100" },
  { label: "Agile Workflows", score: "100" },
];

const softSkillsData = [
  {
    groupName:"Inter-personal Skills",
    skillSets: [
      { name: "Versatility", score: "5" },
      { name: "Hadrworking", score: "5" },
      { name: "Problem Solving", score: "5" },
      { name: "Communication", score: "5" },
    ],
  },
];

const technicalSkillsData = [
  {
    groupName: "Programming Languages",
    skillSets: [
      { name: "Java 7", score: "5" },
      { name: "Java 8", score: "3" },
    ],
  },
  {
    groupName: "Scripting Languages",
    skillSets: [
      { name: "Javascript (ES5, ES6+, ESNEXT)", score: "5" },
      { name: "HTML5 & CSS3", score: "4" },
      { name: "Typescript", score: "3" },
    ],
  },
  {
    groupName: "Javascript Frameworks",
    skillSets: [
      { name: "Node.js", score: "4" },
      { name: "Express", score: "4" },
      { name: "Mongoose", score: "3" },
    ],
  },
  {
    groupName: "Frontend Frameworks",
    skillSets: [
      { name: "ReactJS", score: "4" },
      { name: "AngularJS (1.x)", score: "4" },
      { name: "Angular (2+)", score: "3" },
    ],
  },
  {
    groupName: "Backend Frameworks",
    skillSets: [
      { name: "Spring Boot / Framework", score: "4" },
      { name: "RESTful APIs", score: "5" },
      { name: "Hibernate", score: "3" },
      { name: "Swagger / OAS", score: "5" },
      { name: "jUnit", score: "5" },
      { name: "RESTAssured", score: "4" },
    ],
  },
  {
    groupName: "Databases",
    skillSets: [
      { name: "MongoDB", score: "3" },
      { name: "Oracle RDBMS 11g", score: "3" },
      { name: "DB2", score: "3" },
    ],
  },
  {
    groupName: "Build, CI/CD Tools",
    skillSets: [
      { name: "Maven", score: "4" },
      { name: "GIT", score: "4" },
      { name: "Jenkins", score: "4" },
      { name: "Docker", score: "3" },
    ],
  },
];

const Skills = (props) => {
  let skillGroups = technicalSkillsData.map((val, index) => (
    <SkillGroup key={index} skills={val} />
  ));
  let softSkillGroups = softSkillsData.map((val, index) => (
    <SkillGroup key={index} skills={val} />
  ));
  return (
    <div className={Classes.SkillsSection}>
      <div className={Classes.Expertise}>
        <div className={Classes.Header}>
          <Title>Experience</Title>
        </div>
        <BarGraph data={barData} />
      </div>
      <div className={Classes.SkillSet}>
        <div className={Classes.Header}>
          <Title>Skills</Title>
        </div>
        <div className={Classes.SkillSectionHeader}>Techincal Skills</div>
        {skillGroups}
        <div className={Classes.SkillSectionHeader}>Soft Skills</div>
        {softSkillGroups}
      </div>
    </div>
  );
};

export default Skills;
