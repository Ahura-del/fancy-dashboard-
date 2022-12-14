import React from "react";

import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { Stacked, Pie, SparkLine, Button } from "../components";
import { earningData, EcommerceChartData } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
const Ecommerce = () => {
  const { currentColor } = useStateContext();
  return (
    <div className="pb-10">
      <div className=" flex flex-wrap lg:flex-nowrap justify-center gap-4">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 w-full lg:w-80 rounded-xl p-8 pt-9 bg-hero-pattern bg-no-repeat bg-center bg-cover ">
          <div className="flex items-center justify-start">
            <div>
              <p className="font-bold text-gray-400">Earning</p>
              <p className="text-2xl">$63,844.23</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-1">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg flex flex-col items-center justify-center p-4 rounded-2xl"
            >
              <button
                type="button"
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 ml-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white w-full md:w-[90%] dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl ">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Revenue Updates</p>
            <div className="flex flex-wrap md:flex-nowrap  items-center gap-2 md:gap-4">
              <p
                className="flex items-center gap-2  hover:drop-shadow-xl"
                style={{ color: currentColor }}
              >
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-[#000] hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-10 gap-5  lg:grid-cols-12 ">
            <div className="grid grid-cols-1 gap-6 lg:col-span-6 lg:border-r-1 dark:border-slate-400 lg:border-color lg:m-4 lg:pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">$93,551</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full ml-3 text-xs text-white bg-green-400">
                    25%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div>
                <p>
                  <span className="text-3xl font-semibold">$48,851</span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              <div className="h-full w-full">
                <SparkLine Data={EcommerceChartData} color={currentColor} />
              </div>
              <div>
                <Button
                  text="Download Report"
                  borderRadius="10px"
                  color="white"
                  bgColor={currentColor}
                />
              </div>
            </div>
            <div className="h-full w-full lg:h-full lg:col-span-6 lg:flex lg:items-center">
              <Stacked Data={EcommerceChartData} color={currentColor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
