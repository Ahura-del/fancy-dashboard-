import React from "react";
import { Header } from "../../components";
import Chart from "react-apexcharts";
import { useStateContext } from "../../context/ContextProvider";
const Pyramid = () => {
  const { currentMode } = useStateContext();

  let series = [
    {
      name: "Males",
      data: [
        0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1, 4.2,
        4.5, 3.9, 3.5, 3,
      ],
    },
    {
      name: "Females",
      data: [
        -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22, -4.3,
        -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
      ],
    },
  ];
  let options = {
    chart: {
      type: "bar",
      height: 440,
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    colors: ["#008FFB", "#FF4560"],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    // stroke: {
    //   width: 1,
    //   colors: ["#fff"],
    // },

    // grid: {
    //   xaxis: {
    //     lines: {
    //       show: false,
    //     },
    //   },
    // },
    yaxis: {
      min: -5,
      max: 5,
      labels: {
        style: {
          colors:
            currentMode === "Dark"
              ? [
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                  "#fff",
                ]
              : [
                  "#000",
                  "#000",
                  "#000",
                  "#000",
                  "#000",
                  "#000",
                  "#000",
                  "#000",
                  "#000",
                  "#000",
                ],
        },
      },
    },
    tooltip: {
      shared: false,
      x: {
        formatter: function (val) {
          return val;
        },
      },
      y: {
        formatter: function (val) {
          return Math.abs(val) + "%";
        },
      },
    },
    legend:{
      labels:{
        colors:currentMode === "Dark" ? "#fff" : '#000'
      }
    },
    xaxis: {
      categories: [
        "45+",
        "40-44",
        "35-39",
        "30-34",
        "25-29",
        "20-24",
        "15-19",
        "10-14",
        "5-9",
        "0-4",
      ],
      title: {
        text: "Percent",
        style:{
          color:currentMode === 'Dark' ? '#fff' : '#000'
        }
      },
      labels: {
        style: {
          colors: currentMode === "Dark" ? ["#fff"] : ["#000"],
        },
        formatter: function (val) {
          return Math.abs(Math.round(val)) + "%";
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-3xl dark:bg-secondary-dark-bg mb-8 p-5 md:p-10 ">
      <Header category="Chart" title="Population Rate" />
      <div className=" w-full h-full md:w-[75%] mx-auto">
        <Chart
          options={options}
          series={series}
          type="bar"
          width="100%"
          height={500}
        />
      </div>
    </div>
  );
};

export default Pyramid;
