/**
 * @file Intensity.js is the file that contains the component with intensity chart
 */

import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import "../Style/Components/Performance.scss";

function Performance(props) {
  

  /**
   * @arrayAverage => i stock in this arry new value i changed 
   * with methoe js replace because i have in data @number and me i want @string 
   */
  let arrayAverage = [];

  const datas = props.dataPerf;
  datas.map((nbrKind) => {
    if (nbrKind.kind === 1) {
      return (nbrKind.kind = nbrKind.kind.toString().replace("1", "Intensité"));
    } else if (nbrKind.kind === 2) {
      return (nbrKind.kind = nbrKind.kind.toString().replace("2", "Vitesse"));
    } else if (nbrKind.kind === 3) {
      return (nbrKind.kind = nbrKind.kind.toString().replace("3", "Force"));
    } else if (nbrKind.kind === 4) {
      return (nbrKind.kind = nbrKind.kind.toString().replace("4", "Endurance"));
    } else if (nbrKind.kind === 5) {
      return (nbrKind.kind = nbrKind.kind.toString().replace("5", "Energie"));
    } else if (nbrKind.kind === 6) {
      return (nbrKind.kind = nbrKind.kind.toString().replace("6", "Cardio"));
    }
    return arrayAverage.push(nbrKind.kind);
  });

  return (
    <div className="performance">
      <RadarChart
        style={{ background: "#000" }}
        outerRadius={90}
        width={258}
        height={258}
        data={props.dataPerf}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="kind" stroke="#FFF" tick={{ fontSize: 12 }} />
        <Radar
          dataKey="value"
          fill={"#ff0101"}
          fillOpacity={0.7}
          stroke="transparent"
        />
      </RadarChart>
    </div>
  );
}

export default Performance;
