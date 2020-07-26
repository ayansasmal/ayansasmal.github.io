import React from "react";
import Classes from "./Detail.module.css";

const Detail = (props) => {
  let value = <label className={Classes.Value}>{props.value}</label>;
  if (props.isUrl) {
    value = (
      <a href={props.value} className={Classes.Value}>
        {props.displayText}
      </a>
    );
  }
  return (
    <div className={Classes.Detail}>
      <label className={Classes.Name}>{props.name}</label>
      {value}
    </div>
  );
};

export default Detail;
