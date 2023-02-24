import React from "react";
import Chartbar from "./Chartbar";
import "./Chart.scss";

function Chart({ datapoints }) {

  const chartvalues = datapoints.map((data) => data.value);
  const maximumValue = Math.max(...chartvalues);

  
  return (
    <div className="chart">
      {datapoints.map((data) => (
        <Chartbar
          key={data.label}
          label={data.label}
          value={data.value}
          maxValue={maximumValue}
        />
      ))}
    </div>
  );
}

export default Chart;
