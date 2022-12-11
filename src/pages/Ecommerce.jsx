import React from 'react'

import {BsCurrencyDollar} from 'react-icons/bs';
import {GoPrimitiveDot} from 'react-icons/go';
import {Stacked , Pie , SparkLine, Button} from '../components'
import {earningData , SparklineAreaData , ecomPieChartData} from '../data/dummy';
import {useStateContext} from '../context/ContextProvider'
const Ecommerce = () => {
  return (
    <div className='pb-10'>
      <div className='w-full flex flex-wrap lg:flex-nowrap justify-center gap-2'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 w-full lg:w-80 rounded-xl p-8 pt-9 bg-hero-pattern bg-no-repeat bg-center bg-cover '>
          <div className='flex items-center justify-start'>
            <div>
              <p className='font-bold text-gray-400'>Earning</p>
              <p className='text-2xl'>$63,844.23</p>
            </div>
          </div>
          <div className='mt-6'>
            <Button color="white" bgColor="blue" text="Download" borderRadius="10px" size="md" />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center md:justify-start  gap-1 items-center'>
          {earningData.map((item)=>(
            <div key={item.title} className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  py-4 px-10 pt-9 rounded-2xl">
                <button type='button' className='text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl' style={{color:item.iconColor , backgroundColor:item.iconBg}}>
                  {item.icon}
                </button>
                <p className='mt-3'>
                  <span className='text-lg font-semibold'>{item.amount}</span>
                  <span className={`text-sm text-${item.pcColor} ml-2`} >{item.percentage}</span>
                </p>
                <p className='text-sm text-gray-400 ml-1' >{item.title}</p>
            </div>
          ))}

        </div>
      </div>
      <div className='flex gap-10 flex-wrap justify-center'>
            <div className='bg-white w-full md:w-[80%] dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl '>
              <div className='flex justify-between'>
                <p className='text-xl font-semibold'>Revenue Updates</p>
                <div className='flex items-center gap-4'>
                  <p className='flex items-center gap-2 text-gray-600 hover:drop-shadow-xl'>
                    <span><GoPrimitiveDot/></span>
                    <span>Expense</span>
                  </p>
                  <p className='flex items-center gap-2 text-green-400 hover:drop-shadow-xl'>
                    <span><GoPrimitiveDot/></span>
                    <span>Budget</span>
                  </p>
                </div>
              </div>
              <div className='grid grid-cols-1 mt-10 gap-5  md:grid-cols-12 '>
                <div className='grid grid-cols-1 gap-6 md:col-span-6 md:border-r-1 md:border-color md:m-4 md:pr-10'>

                  <div  >
                    <p>
                      <span className='text-3xl font-semibold'>$93,551</span>
                      <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full ml-3 text-xs text-white bg-green-400'>25%</span>
                    </p>
                    <p className='text-gray-500 mt-1'>Budget</p>
                  </div>
                  <div >
                    <p>
                      <span className='text-3xl font-semibold'>$48,851</span>
                    </p>
                    <p className='text-gray-500 mt-1'>Expense</p>
                  </div>
                  <div className='h-full'>
                    <SparkLine Data={SparklineAreaData} color="rgb(75, 192, 192)" />
                  </div>
                  <div >
                    <Button text="Download Report" borderRadius="10px" color='white' bgColor="blue" />
                  </div>
                </div>
                <div className='md:col-span-6 md:flex md:items-center'>
                  <Stacked Data={ecomPieChartData}  />
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Ecommerce