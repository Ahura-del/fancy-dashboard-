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
  const {setActiveMenu , isClicked , handleClicked , currentColor} = useStateContext()
  const handleActiveMenu = ()=>{
    setActiveMenu(true)
  }
  return (
    <nav className="py-3  flex items-center justify-between">
      <div className="flex items-center gap-5">
        <button onClick={handleActiveMenu} >
          <HiBars3BottomLeft  className="text-2xl" style={{color:currentColor}} />
        </button>
        <Tooltip title="Search" placement="bottom">
        <button>
          <IoSearchOutline className="text-2xl" style={{color:currentColor}} />
        </button>
        </Tooltip>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-5">
        <Tooltip title="Cart" placement="bottom" >
        <button onClick={()=>handleClicked("cart")}>
          <HiOutlineShoppingCart className="text-2xl" style={{color:currentColor}} />
        </button>
        </Tooltip>
        <Tooltip title="Chat" placement="bottom" >
        <button onClick={()=>handleClicked("chat")}>
          <BiMessageSquareError className="text-2xl" style={{color:currentColor}} />
        </button>
        </Tooltip>
        <Tooltip title="Notification" placement="bottom">
        <button onClick={()=>handleClicked("notification")}>
          <BsBell className="text-2xl" style={{color:currentColor}} />
        </button>
        </Tooltip>
        </div>
        <Tooltip title="Profile" placement="bottom">
        <button type="button" className="flex gap-2 items-center dark:text-slate-50 " onClick={()=>handleClicked("userProfile")}>
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
