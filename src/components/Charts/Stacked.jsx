import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
 
  BarElement,
  Title,
  Tooltip,
  Legend,

} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);
// ChartJS.defaults.plugins.subtitle.display= "this is test"
ChartJS.defaults.plugins.legend.display = false

const Stacked = ({Data }) => {
  const dataChart = {
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label:"test",
        data: Data.map((data) => data.userGain),
        fill: false,
        backgroundColor:Data.map((data) => data.bgColor),
        borderColor: Data.map((data) => data.borderColor),
        borderWidth: 1,
      }]
  };
  return (

      <Bar data={dataChart} />
    
  )
}

export default Stacked