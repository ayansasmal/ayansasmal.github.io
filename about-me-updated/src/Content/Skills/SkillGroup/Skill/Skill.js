import React from "react";
import Classes from "./Skill.module.css";

const SkillSet = (props) => {
  let dark = [];
  let light = [];
  for (let i = 0; i < props.score; i++) {
    dark.push(
      <span key={i}>
        <ion-icon name="ellipse"></ion-icon>
      </span>
    );
  }
  for (let i = 0; i < 5 - props.score; i++) {
    light.push(
      <span key={i}>
        <ion-icon name="ellipse-outline"></ion-icon>
      </span>
    );
  }
  return (
    <div className={Classes.SkillSet}>
      <div className={Classes.SkillName}>{props.name}</div>
      <div className={Classes.SkillScore}>
        {dark}
        {light}
      </div>
    </div>
  );
};

export default SkillSet;
