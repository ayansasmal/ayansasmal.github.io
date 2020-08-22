import React from "react";
import Classes from "./Skills.module.css";
import StarIcon from "../../Assets/svg/starIcon";

const arrSkills = [
  { title: "Java 7", isSpeciality: true },
  { title: "JavaScript (ES5, ES6 +)", isSpeciality: true },
  { title: "RESTFul APIs", isSpeciality: true },
  { title: "Node.js", isSpeciality: true },
  { title: "React JS", isSpeciality: true },
  { title: "Java 8", isSpeciality: false },
  { title: "Angular JS (1.x)", isSpeciality: false },
  { title: "Angular (2+)", isSpeciality: false },
  { title: "HTML5", isSpeciality: false },
  { title: "CSS3", isSpeciality: false },
  { title: "TypeScript", isSpeciality: false },
  { title: "Spring Boot/Framework", isSpeciality: true },
  { title: "Hibernate", isSpeciality: false },
  { title: "Swagger and OAS", isSpeciality: true },
  { title: "jUnit", isSpeciality: false },
  { title: "REST Assured", isSpeciality: false },
  { title: "Mongoose", isSpeciality: false },
  { title: "Maven", isSpeciality: false },
  { title: "Git", isSpeciality: false },
  { title: "SonarQube", isSpeciality: false },
  { title: "Jenkins", isSpeciality: false },
  { title: "Docker", isSpeciality: false },
  { title: "MongoDB", isSpeciality: false },
  { title: "Oracle RDBMS", isSpeciality: false },
  { title: "DB2", isSpeciality: false },
];

const Skills = (props) => {
  const skills = arrSkills.map((val, i) => (
    <li key={i} className={Classes.Skill}>
      {val.isSpeciality && <StarIcon />}
      {val.title}
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
