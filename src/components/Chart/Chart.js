import React from "react";
import ChartBar from "./ChartBar";

import "./Chart.css";

const Chart = (props) => {
  const valueArray = props.dataPoints.map(Datapoint => Datapoint.value)
  const sum = valueArray.reduce((partialSum, a) => partialSum + a, 0);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          maxValue={sum}
          value={dataPoint.value}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart
