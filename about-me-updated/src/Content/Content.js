import React from "react";
import Classes from "./Content.module.css";
import Skills from "./Skills/Skills";
import Qualifications from "./Qualifications/Qualifications";
import Experiences from "./Experiences/Experiences";
import Achievements from "./Achievements/Achievements";

const Content = (props) => {
  return <div className={Classes.Content}>
      <Skills/>
      <Experiences/>
      <Achievements/>
      <Qualifications/> 
  </div>;
};

export default Content;
