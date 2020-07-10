import React from "react";
import Classes from "./Title.module.css";

const Title = (props) => {
  return <div className={Classes.Title}>{props.children}</div>;
};

export default Title;
