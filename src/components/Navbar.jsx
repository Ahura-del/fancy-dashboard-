import React from "react";
import avatar from "../data/avatar.jpg";
import { HiBars3BottomLeft, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { BiMessageSquareError } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import {useStateContext} from '../context/ContextProvider';
const Navbar = () => {
  const {setActiveMenu} = useStateContext()
  return (
    <nav className="py-3 px-10 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={()=> setActiveMenu(prev => !prev)}>
          <HiBars3BottomLeft className="text-xl text-teal-400" />
        </button>
        <button>
          <IoSearchOutline className="text-xl text-teal-400" />
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button>
          <HiOutlineShoppingCart className="text-xl text-teal-400" />
        </button>
        <button>
          <BiMessageSquareError className="text-xl text-teal-400" />
        </button>
        <button>
          <BsBell className="text-xl text-teal-400" />
        </button>
        <button type="button" className="flex gap-2 items-center">
          <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
          <span>Hi, </span>
          <span className="font-bold">Micheal</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
