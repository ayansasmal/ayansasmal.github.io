import React from 'react';
import Classes from './Achievements.module.css';

const Achievements = ({ data }) => {
  const descriptions = data.map((d, index) => (
    <li key={index} className={Classes.ListedText}>
      {d}
    </li>
  ));
  return (
    <div className={Classes.Content}>
      <div className={Classes.Qualification}>
        <ul className={Classes.List}>{descriptions}</ul>
      </div>
    </div>
  );
};

export default Achievements;
