import React, { useState } from "react";
import Classes from "./SkillGroup.module.css";
import Skill from "./Skill/Skill";

const SkillGroup = (props) => {
  const [show, setShow] = useState(true);
  const [clsChevron, setClsChevron] = useState([Classes.Chevron, Classes.Rotated]);
  const [clsSet, setClsSet] = useState([Classes.Skillset, Classes.Hidden]);

  const clickHandler = () => {
    if (!show) {
      setClsChevron([Classes.Chevron, Classes.Rotated]);
      setClsSet([Classes.Skillset, Classes.Hidden]);
    } else {
      setClsChevron([Classes.Chevron]);
      setClsSet([Classes.Skillset]);
      
    }
    setShow(!show);
  };

  let skillSets = null;
  skillSets = props.skills.skillSets.map((val, index) => (
    <Skill key={index} score={val.score} name={val.name} />
  ));

  return (
    <div className={Classes.SkillGroup}>
      <div className={Classes.SkillGroupName} onClick={clickHandler}>
        {props.skills.groupName}
        <div className={clsChevron.join(" ")}>
          <ion-icon name="chevron-down-outline"></ion-icon>
        </div>
      </div>
      <div className={clsSet.join(' ')}>
        {skillSets}
      </div>
    </div>
  );
};

export default SkillGroup;
