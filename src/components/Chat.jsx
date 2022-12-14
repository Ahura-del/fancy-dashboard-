import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { chatData } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
const Chat = () => {
  const { currentColor ,handleFalseClick } = useStateContext();
  return (
    <div className="bg-white dark:bg-main-dark-bg w-96 drop-shadow-lg p-5">
      <div className="flex items-center justify-between">
        <p className="text-lg dark:text-white" >Messages</p>
        <button
          type="button"
          onClick={() => handleFalseClick('chat')}
          style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
          className="text-2xl p-3 hover:drop-shadow-xl dark:hover:bg-secondary-dark-bg hover:bg-light-gray "
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className="mt-5">
        {chatData.map((item, index) => (
          <div
            className="border-b-1 border-slate-200 mb-3 pb-3 flex items-center gap-5"
            key={index}
          >
            <div className="basis-1/4">
              <img
                src={item.image}
                alt="avatar"
                className="w-12 h-12 rounded-full"
              />
            </div>
            <div className="basis-3/4 text-left">
              <p className="font-bold dark:text-slate-50">{item.message}</p>
              <p className="text-sm py-2 dark:text-slate-100 ">{item.desc}</p>
              <p className="text-xs dark:text-slate-200 ">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <button
          className="w-full py-3 rounded-xl text-slate-100"
          style={{ background: currentColor }}
        >
          See All Messages
        </button>
      </div>
    </div>
  );
};

export default Chat;
