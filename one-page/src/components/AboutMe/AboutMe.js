import React from 'react';
import Classes from './AboutMe.module.css';

const AboutMe = ({ data }) => {
  const descriptions = data.map((d, index) => (
    <p key={index} className={Classes.Para}>
      {d}
    </p>
  ));
  return (
    <div className={Classes.Content}>
      <div className={Classes.Qualification}>
        <div className={Classes.Description}>{descriptions}</div>
      </div>
    </div>
  );
};

export default AboutMe;
