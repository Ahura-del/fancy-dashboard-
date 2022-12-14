import React from "react";
import { Header } from "../../components";
import Chart from "react-apexcharts";
import { useStateContext } from "../../context/ContextProvider";
const AreaDiagram = () => {
  const { currentMode } = useStateContext();
  let series = [
    {
      name: "A",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "B",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  let options = {
    chart: {
      // height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
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
                ],
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: currentMode === "Dark" ? ["#fff"] : ["#000"],
        },
      },
    },
    legend: {
      show: true,
      labels: {
        colors: currentMode === "Dark" ? ["#fff"] : ["#000"],
      },
    },
    responsive: [
      {
        breakpoint: 500,
        options: {
          chart: {
            height: 200,
          },
        },
      },
    ],
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <div className="bg-white rounded-3xl dark:bg-secondary-dark-bg mb-8 p-5 md:p-10 ">
      <Header category="Chart" title="Efficiency Rate" />
      <div className=" w-full h-full md:w-[75%] mx-auto">
        <Chart
          options={options}
          series={series}
          type="area"
          width="100%"
          height={500}
        />
      </div>
    </div>
  );
};

export default AreaDiagram;
