import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line, Pie, Bar, Radar, Scatter, Chart } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["April", "May", "June", "July", "August"],
    datasets: [
      {
        type: "scatter",
        fill: false,
        label: "Gaming Hours",
        // data: [50, 10, 20, 30, 40],
        data: [
          { x: 10, y: 22 },
          { x: 0, y: 5 },
          { x: 90, y: 100 },
          { x: 40, y: 22 },
        ],
        // backgroundColor: ["red", "yellow", "blue", "green", "aqua"],
      },
      {
        type: "line",
        fill: false,
        label: "Study Hours",
        data: [0, 20, 30, 40, 80],
        // data: [
        //   { x: 10, y: 22 },
        //   { x: 0, y: 5 },
        //   { x: 90, y: 100 },
        //   { x: 40, y: 22 },
        // ],
        // backgroundColor: ["red", "yellow", "blue", "green", "aqua"],
      },
    ],
  };
  return <Chart data={data} />;
};

export default LineChart;
