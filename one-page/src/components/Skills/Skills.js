import React from 'react';
import Classes from './Skills.module.css';
import StarIcon from '../../Assets/svg/starIcon';

const Skills = props => {
  const skills = props.data.map((val, i) => (
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
