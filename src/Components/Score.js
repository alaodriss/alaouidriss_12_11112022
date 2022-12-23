/**
 *  Score.js is the file that contains the component with score chart
 */


import React from "react";
import "../Style/Components/Score.scss";
import { PieChart, Pie, Cell } from "recharts";
import PropTypes from "prop-types";

function Score(props) {
  const dataScs = [
    {
      name: "completed",
      value: props.dataSc ? props.dataSc : props.dataSc2,
      fillColor: "#ff0101",
    },
    {
      name: "not-completed",
      value: 1 - (props.dataSc ? props.dataSc : props.dataSc2),
      fillColor: "#FFF",
    },
  ];

  return (
    <div className="div-score">
      <div className="titre-score">Score</div>
      <PieChart width={258} height={263}>
        <Pie
          data={dataScs}
          innerRadius={70}
          outerRadius={80}
          startAngle={90}
          endAngle={550}
          dataKey="value"
        >
          {dataScs.map((item, index) => (
            <Cell
              key={`cell-${index}`}
              fill={item.fillColor}
              cornerRadius="50%"
            />
          ))}
        </Pie>
      </PieChart>
      <div className="div-resultat-score">
        <p className="p-result-score">{`${
          100 * (props.dataSc ? props.dataSc : props.dataSc2)
        }%`}</p>
        <br />
        <p className="p-text-score">
          de votre <br />
          objectif
        </p>
        <br />
      </div>
    </div>
  );
}
export default Score;

Score.propTypes = {
  data: PropTypes.object.isRequired,
};
