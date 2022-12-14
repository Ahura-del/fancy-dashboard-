import React from 'react'
import { Header } from '../../components'
import Chart from "react-apexcharts";
import { useStateContext } from '../../context/ContextProvider';
const BarDiagram = () => {
  const { currentMode , currentColor } = useStateContext()
  let series = [{
    data: [400, 330, 200, 470, 320, 510, 540]
  }]

  let options = {
    chart: {
      type: 'bar',
      height: 350,
      
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      }
    },
    fill:{
      colors:currentColor,
    },
    dataLabels: {
      enabled: true,
      position:'center'
    },
    yaxis:{
      labels:{
        style:{
          colors:
          currentMode === "Dark"
                ? ["#fff"]
                : ["#000"],
        }
      }
    },
    xaxis: {
      categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan'
      ],
      labels:{
        style:{
          colors:
          currentMode === "Dark"
                ? ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"]
                : ["#000", "#000", "#000", "#000", "#000", "#000", "#000"],
        }
      }
    }
  }


  return (
    <div className='bg-white rounded-3xl dark:bg-secondary-dark-bg mb-8 p-5 md:p-10 '>
      <Header category="Chart" title="Pollution Rate" />
      <div className=' w-full h-full md:w-[75%] mx-auto'>
      <Chart
              options={options}
              series={series}
              type="bar"
              width="100%"
              height={500}
            />
      </div>
    </div>
  )
}

export default BarDiagram