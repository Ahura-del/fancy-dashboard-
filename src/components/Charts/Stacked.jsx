import React from "react";
import Chart from "react-apexcharts";
import { useStateContext } from "../../context/ContextProvider";

const Stacked = () => {
  const { currentColor, currentMode } = useStateContext();
  let series = [
    {
      name: "Expense",
      data: [44, 55, 41, 67, 22],
    },
    {
      name: "Budget",
      data: [13, 23, 20, 8, 13],
    },
  ];

  let options = {
    chart: {
      type: "bar",
      height: "100%",
      stacked: false,

      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    responsive: [
      {
        breakpoint: 500,
        options: {
          chart: {
            width: 250,
          },
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "13px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
      ],
      labels: {
        style: {
          colors:
            currentMode === "Dark"
              ? ["#fff", "#fff", "#fff", "#fff", "#fff"]
              : ["#000", "#000", "#000", "#000", "#000"],
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors:
            currentMode === "Dark"
              ? ["#fff", "#fff", "#fff", "#fff", "#fff"]
              : ["#000", "#000", "#000", "#000", "#000"],
        },
      },
    },
    legend: {
      show: true,
      labels: {
        colors: currentMode === "Dark" ? ["#fff", "#fff"] : ["#000", "#000"],
      },
    },
    colors: [currentColor, "#111"],
    fill: {
      opacity: 1,
    },
  };

  return (
    <div className="max-w-[700px]">
      <Chart options={options} series={series} type="bar" width="500" />
    </div>
  );
};

export default Stacked;
