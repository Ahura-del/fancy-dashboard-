import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,

} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.defaults.plugins.legend.display = false



const SparkLine = ({Data , color}) => {
  const dataChart = {
    labels: Data.map((data) => data.year),
    datasets: [
      {
        data: Data.map((data) => data.userGain),
        fill: false,

        borderColor: color,
        
      }]
  };
  return (
   
      <Line data={dataChart} />
    
  );
};

export default SparkLine;
