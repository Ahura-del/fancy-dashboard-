import React from "react";
import avatar from "../data/profile.jpg";
import { HiBars3BottomLeft, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { BiMessageSquareError } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { useStateContext } from "../context/ContextProvider";
import { Tooltip } from "@mui/material";
import Chat from "./Chat";
import Notification from "./Notification";
import UserProfile from "./UserProfile";
const Navbar = () => {
  const { setActiveMenu, isClicked, handleClicked, currentColor } =
    useStateContext();
  const handleActiveMenu = () => {
    setActiveMenu(true);
  };
  return (
    <nav className="py-3  flex items-center justify-between">
      <div className="flex items-center gap-5">
        <button onClick={handleActiveMenu}>
          <HiBars3BottomLeft
            className="text-2xl"
            style={{ color: currentColor }}
          />
        </button>
        <Tooltip title="Search" placement="bottom">
          <button>
            <IoSearchOutline
              className="text-2xl"
              style={{ color: currentColor }}
            />
          </button>
        </Tooltip>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-5">
          <div>
            <Tooltip title="Cart" placement="bottom">
              <button onClick={() => handleClicked("cart")}>
                <HiOutlineShoppingCart
                  className="text-2xl"
                  style={{ color: currentColor }}
                />
              </button>
            </Tooltip>
          </div>
          <div className="relative">
            <Tooltip title="Chat" placement="bottom">
              <button onClick={() => handleClicked("chat")}>
                <BiMessageSquareError
                  className="text-2xl"
                  style={{ color: currentColor }}
                />
              </button>
            </Tooltip>
            {isClicked.chat && (
              <div className="absolute z-20 top-10 right-0">
                {" "}
                <Chat />{" "}
              </div>
            )}
          </div>
          <div className="relative">
            <Tooltip title="Notification" placement="bottom">
              <button onClick={() => handleClicked("notification")}>
                <BsBell className="text-2xl" style={{ color: currentColor }} />
              </button>
            </Tooltip>
            {isClicked.notification && (
              <div className="absolute z-20 top-10 right-0">
                {" "}
                <Notification />{" "}
              </div>
            )}
          </div>
        </div>
        <div className="relative">
          <Tooltip title="Profile" placement="bottom">
            <button
              type="button"
              className="flex gap-2 items-center dark:text-slate-50 "
              onClick={() => handleClicked("userProfile")}
            >
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <span>Hi, </span>
              <span className="font-bold">Ahura</span>
            </button>
          </Tooltip>
          {isClicked.userProfile && (
            <div className="absolute z-20 top-12 right-0">
              {" "}
              <UserProfile />{" "}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
