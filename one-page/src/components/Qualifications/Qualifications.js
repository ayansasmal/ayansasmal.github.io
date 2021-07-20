import React from 'react';
import Classes from './Qualifications.module.css';

const Qualifications = ({ data }) => {
  return (
    <div className={Classes.Content}>
      <div className={Classes.Qualification}>
        <div className={Classes.Header}>
          <span className={Classes.Name}>{data.degree}, </span>
          <span className={Classes.Duration}>{data.duration}</span>
        </div>
        <div className={Classes.Description}>{data.description}</div>
      </div>
    </div>
  );
};

export default Qualifications;
