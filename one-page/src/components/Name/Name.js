import React from "react";
import Classes from "./Name.module.css";

const Name = (props) => {
  return (
    <div className={Classes.Content}>
      <div className={Classes.Photo}></div>
      <div className={Classes.Name}>Ayan Sasmal</div>
    </div>
  );
};

export default Name;
