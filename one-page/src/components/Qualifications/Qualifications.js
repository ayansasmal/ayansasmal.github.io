import React from "react";
import Classes from "./Qualifications.module.css";

const Qualifications = (props) => {
  return (
    <div className={Classes.Content}>
      <div className={Classes.Qualification}>
        <div className={Classes.Header}>
          <span className={Classes.Name}>Bachelors in Technology, </span>
          <span className={Classes.Duration}>2007-2011</span>
        </div>
        <div className={Classes.Description}>
          I have completed 4 years of Bachelors of Technology in IT domain from
          GGSIP University, New Delhi in First Division. I have developed a .NET
          based Desktop Application as final year project to spy on computers in
          LAN.
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
