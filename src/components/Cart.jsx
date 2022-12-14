import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { cartData } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
const Cart = () => {
  const { currentColor, handleFalseClick } = useStateContext();
  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0 ">
      <div className="float-right h-screen pb-12 dark:text-gray-200 bg-white dark:bg-main-dark-bg md:w-400 overflow-y-scroll">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-xl dark:text-slate-50">
            Shopping Cart
          </p>
          <button
            type="button"
            onClick={() => handleFalseClick('cart')}
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl dark:hover:bg-secondary-dark-bg hover:bg-light-gray "
          >
            <MdOutlineCancel />
          </button>
        </div>

        <div className="mt-5 px-5">
          {cartData.map((item, index) => (
            <div
              className="flex items-center mb-3 pb-3 border-b-1 border-slate-300 gap-5"
              key={index}
            >
              <div className="basis-1/3">
                <img
                  src={item.image}
                  alt="product"
                  className="w-24 h-24 rounded-lg"
                />
              </div>
              <div className="basis-2/3">
                <p className="text-lg font-semibold dark:text-white ">
                  {item.name}
                </p>
                <p className="font-thin text-sm py-1">{item.category}</p>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold dark:text-white ">
                    {item.price}
                  </p>
                  <div className="flex items-center">
                    <button className="border-1 border-slate-200 dark:bg-secondary-dark-bg p-2 text-xl ">
                      -
                    </button>
                    <span className="border-1 border-slate-200 flex items-center justify-center p-2 text-xl">
                      0
                    </span>
                    <button className="border-1 border-slate-200 p-2 dark:bg-secondary-dark-bg text-xl">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-2 px-5 flex items-center justify-between">
            <p className="text-slate-400 dark:text-slate-100">Sub Total</p>
            <p className="font-bold text-xl dark:text-white">$890</p>
          </div>
          <div className="mt-2 px-5 flex items-center justify-between">
            <p className="text-slate-400 dark:text-slate-100">Total</p>
            <p className="font-bold text-xl dark:text-white">$890</p>
          </div>
        </div>
        <div className="px-5 mt-3">
          <button
            className="w-full py-3 rounded-lg text-slate-100"
            style={{ background: currentColor }}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
