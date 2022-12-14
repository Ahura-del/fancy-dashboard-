import React from 'react'
import { Header } from '../../components'
import Chart from "react-apexcharts";
import { useStateContext } from '../../context/ContextProvider';
const PieDiagram = () => {
  const { currentMode } = useStateContext()
  let options = {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels:['A', 'B', 'C', 'D', 'E'],
    legend:{
      position: 'bottom',
      labels:{
        colors : currentMode === 'Dark' ? "#fff" : '#000'
      }
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          height: 500
        },
       
      }
    }]
  }

  let series = [44, 55, 13, 43, 22]

  return (
    <div className='bg-white rounded-3xl dark:bg-secondary-dark-bg mb-8 p-5 md:p-10 '>
    <Header category="Chart" title="Transport Rate" />
    <div className=' w-full h-full md:w-[75%] mx-auto'>
    <Chart
            options={options}
            series={series}
            type="pie"
            width="100%"
            height={500}
          />
    </div>
  </div>
  )
}

export default PieDiagram