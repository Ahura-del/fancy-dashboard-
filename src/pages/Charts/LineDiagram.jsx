import React from 'react'
import Chart from "react-apexcharts";
import { Header } from '../../components'
import { useStateContext } from '../../context/ContextProvider';

const LineDiagram = () => {
  const {currentMode} = useStateContext()
  let series = [{
    name: "A",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
},
{
  name: "B",
  data: [15, 32, 45, 55, 34, 58, 65, 85, 110]
},
{
  name: "C",
  data: [5, 20, 25, 45, 63, 72, 75, 90, 100]
},
]

let options= {
  chart: {
    height: 100,
    type: 'line',
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    }
    
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },

  yaxis:{
    labels:{
      style:{
        colors:
        currentMode === "Dark"
              ? ["#fff", "#fff", "#fff", "#fff"]
              : ["#000", "#000", "#000", "#000"],
      }
    }
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
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    labels:{
      style:{
        colors:
        currentMode === "Dark"
              ? ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"]
              : ["#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000"],
      }
    }
  }
}


  return (
    <div className='bg-white rounded-3xl dark:bg-secondary-dark-bg mb-8 p-5 md:p-10 '>
      <Header category="Chart" title="Inflation Rate" />
      <div className=' w-full h-full md:w-[75%] mx-auto'>
      <Chart
              options={options}
              series={series}
              type="line"
              width="100%"
              height={500}
            />
      </div>
    </div>
  )
}

export default LineDiagram