import React from "react";
import Classes from "./RightSide.module.css";

const RightSide = (props) => {
  return <div className={Classes.RightSide}>{props.children}</div>;
};

export default RightSide;
