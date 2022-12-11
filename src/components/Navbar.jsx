import React from "react";
import avatar from "../data/avatar.jpg";
import { HiBars3BottomLeft, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { BiMessageSquareError } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import {useStateContext} from '../context/ContextProvider';
import { Tooltip } from "@mui/material";
import Chat from "./Chat";
import Cart from "./Cart";
import Notification from "./Notification";
import UserProfile from "./UserProfile";
const Navbar = () => {
  const {setActiveMenu , isClicked , handleClicked} = useStateContext()

  return (
    <nav className="py-3 px-5 md:px-10 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={()=> setActiveMenu(prev => !prev)}>
          <HiBars3BottomLeft className="text-xl text-teal-400" />
        </button>
        <Tooltip title="Search" placement="bottom">
        <button>
          <IoSearchOutline className="text-xl text-teal-400" />
        </button>
        </Tooltip>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-5">
        <Tooltip title="Cart" placement="bottom" >
        <button onClick={()=>handleClicked("cart")}>
          <HiOutlineShoppingCart className="text-xl text-teal-400" />
        </button>
        </Tooltip>
        <Tooltip title="Chat" placement="bottom" >
        <button onClick={()=>handleClicked("chat")}>
          <BiMessageSquareError className="text-xl text-teal-400" />
        </button>
        </Tooltip>
        <Tooltip title="Notification" placement="bottom">
        <button onClick={()=>handleClicked("notification")}>
          <BsBell className="text-xl text-teal-400" />
        </button>
        </Tooltip>
        </div>
        <Tooltip title="Profile" placement="bottom">
        <button type="button" className="flex gap-2 items-center" onClick={()=>handleClicked("userProfile")}>
          <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
          <span>Hi, </span>
          <span className="font-bold">Micheal</span>
        </button>
        </Tooltip>
      </div>
      {isClicked.cart && <Cart />}
      {isClicked.chat && <Chat />}
      {isClicked.notification && <Notification />}
      {isClicked.userProfile && <UserProfile />}
    </nav>
  );
};

export default Navbar;
