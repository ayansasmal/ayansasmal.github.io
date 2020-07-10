import React from "react";
import Classes from "./BarGraph.module.css";
import Bar from "./Bar/Bar";

const BarGraph = (props) => {
  let bars = null;
  if (props.data) {
    bars = props.data.map((val, index) => (
      <Bar key={index} label={val.label} score={`${val.score}%`} />
    ));
  }
  return (
    <div className={Classes.BarGraph}>
      {bars}
    </div>
  );
};

export default BarGraph;
