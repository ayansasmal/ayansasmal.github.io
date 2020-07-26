import React from "react";
import Classes from "./LeftSide.module.css";

const LeftSide = (props) => {
  return <div className={Classes.LeftSide}>{props.children}</div>;
};

export default LeftSide;
