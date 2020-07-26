import React from "react";
import Classes from "./Description.module.css";

const Description = (props) => {
  const listedData = props.text.listedText.map((val, index) => (
    <li key={index} className={Classes.ListedText}>
      {val}
    </li>
  ));
  return (
    <div className={Classes.Description}>
      <span>{props.text.plainText}</span>
      <ul className={Classes.List}>{listedData}</ul>
    </div>
  );
};

export default Description;
