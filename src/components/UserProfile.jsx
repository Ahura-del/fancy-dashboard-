import React from "react";
import { useStateContext } from "../context/ContextProvider";
import {userProfileData} from '../data/dummy';
import user from '../data/profile.jpg';
import { MdOutlineCancel } from "react-icons/md";
const UserProfile = () => {
  const { currentColor, handleFalseClick } = useStateContext();

  return (
    <div className="bg-white dark:bg-main-dark-bg w-[330px] md:w-96 drop-shadow-lg p-5">
      <div className="flex items-center mb-5 justify-between">
        <p className="text-lg dark:text-white">User Profile</p>
        <button
          type="button"
          onClick={() => handleFalseClick("userProfile")}
          style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
          className="text-2xl p-3 hover:drop-shadow-xl dark:hover:bg-secondary-dark-bg hover:bg-light-gray "
        >
          <MdOutlineCancel />
        </button>
      </div>
      <div className=" border-b-1 border-slate-300 pb-5 mb-5 ">
          <div className="flex items-center gap-5 w-[80%] mx-auto">

        <div >
          <img src={user} alt="profile" className="w-16 h-16 rounded-full" />
        </div>
        <div className="basis-2/3 text-left">
          <p className="text-lg font-semibold dark:text-white">Ahura Delnava</p>
          <p className="py-1 text-sm dark:text-slate-200" >Administrator</p>
          <p className="text-xs dark:text-slate-300">ahuradelnava@gmail.com</p>
        </div>

          </div>
      </div>
      <div className="mt-2">
        {userProfileData.map((item , index)=>(
          <div key={index} className=" mb-5 pb-5  border-b-1 border-slate-300" >
            <div className="flex items-center gap-5 w-[80%] mx-auto">

            <div className="p-4 text-xl rounded-lg  " style={{background:item.iconBg , color:item.iconColor}}>
              {item.icon}
            </div>
            <div className="basis-2/3 text-left">
              <p className="font-semibold dark:text-slate-100" >{item.title}</p>
              <p className="text-sm pt-2 dark:text-slate-100 " >{item.desc}</p>
            </div>

            </div>
          </div>
        ))}
      </div>
      <div className="mt-2">
        <button className="w-full py-3 rounded-lg text-slate-100" style={{background:currentColor}} >Logout</button>
      </div>
    </div>
  );
};

export default UserProfile;
