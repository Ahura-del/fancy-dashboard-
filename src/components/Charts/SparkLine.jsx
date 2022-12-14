import React from "react";
import Chart from "react-apexcharts";
import { useStateContext } from "../../context/ContextProvider";
const SparkLine = () => {
  const { currentColor } = useStateContext();
  let options = {
    chart: {
      type: "area",
      height: 150,
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: "smooth",
    },

    fill: {
      opacity: 0.3,
    },
    yaxis: [
      {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
    ],

    colors: [currentColor],
    responsive: [
      {
        breakpoint: 500,
        options: {
          chart: {
            width: 250,
          },
        },
      },
    ],
    series: [
      {
        name: "Expense",
        data: [1.4, 2, 2.5, 1.5, 2.5],
      },
    ],
  };

  return (
    <div>
      <Chart
        options={options}
        series={options.series}
        type="area"
        width="400"
      />
    </div>
  );
};

export default SparkLine;
