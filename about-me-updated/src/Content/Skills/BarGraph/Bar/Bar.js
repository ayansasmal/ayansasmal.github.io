import React from "react";
import Classes from "./Bar.module.css";

const Bar = (props) => {
  return (
    <div className={Classes.Bar} style={{ width: props.score}}>
      <span className={Classes.Label}>{props.label}</span>
    </div>
  );
};

export default Bar;
