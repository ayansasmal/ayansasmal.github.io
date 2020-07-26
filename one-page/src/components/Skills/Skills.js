import React from "react";
import Classes from "./Skills.module.css";

const arrSkills = [
  "Java 7",
  "Java 8",
  "JavaScript (ES5, ES6 +)",
  "Node.js",
  "React JS",
  "Angular JS (1.x)",
  "Angular (2+)",
  "HTML5",
  "CSS3",
  "TypeScript",
  "Spring Boot/Framework",
  "Hibernate",
  "RESTFul APIs",
  "Swagger and OAS",
  "jUnit",
  "REST Assured",

  "Mongoose",
  "Maven",
  "Git",
  "SonarQube",
  "Jenkins",
  "Docker",
  "MongoDB",
  "Oracle RDBMS",
  "DB2",
];

const Skills = (props) => {
  const skills = arrSkills.map((val, i) => (
    <li key={i} className={Classes.Skill}>
      {val}
    </li>
  ));
  return (
    <div className={Classes.Content}>
      <div className={Classes.Header}>Skills</div>
      <ul className={Classes.SkillSet}>{skills}</ul>
    </div>
  );
};

export default Skills;
