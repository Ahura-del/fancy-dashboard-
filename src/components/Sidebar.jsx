import React from "react";
import { SiShopify } from "react-icons/si";
import { FaRegTimesCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();
  const handleCloseMenu = ()=>{
    if(window.innerWidth <=900){
      setActiveMenu(false)
    }
  }
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-gray-200 text-slate-800 dark:bg-secondary-dark-bg dark:text-slate-200 text-black text-md";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray text-md";
  return (
    <div className="pt-4 pb-10 px-6 overflow-auto h-screen">
      {activeMenu ? (
        <>
          <div className="flex items-center justify-between">
            <Link to="/" className="flex gap-3 items-center">
              <SiShopify className="text-3xl" />
              <h1 className="font-bold text-xl ">Fancy Shop</h1>
            </Link>
            <button
              className="md:hidden"
              type="button"
              onClick={() => setActiveMenu((prev) => !prev)}
            >
              <FaRegTimesCircle />
            </button>
          </div>
          <div className="mt-10 overflow-auto">
            {links.map((link, index) => (
              <div key={index}>
                <h2
                  className="text-lg uppercase font-bold text-gray-500 my-3"
                >
                  {link.title}
                </h2>
                <div>
                  {link.links.map((link, ind) => (
                    <NavLink
                      key={ind}
                      onClick={handleCloseMenu}
                      to={link.name === "ecommerce" ? "/" : `/${link.name}`}
                      className={({ isActive }) =>
                        isActive ? activeLink : normalLink
                      }
                    >
                      <span className="text-xl inline-block">{link.icon}</span>

                      <span className="text-md inline-block capitalize ">
                        {link.name}
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="w-full hidden md:inline-block">
          <div className=" flex items-center  justify-center">
            <Link to="/" className="flex items-center">
              <SiShopify className="text-3xl" />
            </Link>
          </div>
          <div className="mt-10 w-full overflow-auto flex flex-wrap justify-center">
            {links.map((link, index) => (
              <div key={index}>
                <hr className="h-[2px] my-3 bg-gray-400" />
                {link.links.map((link, ind) => (
                  <NavLink
                    key={ind}
                    to={link.name === "ecommerce" ? "/" : `/${link.name}`}
                    className={({ isActive }) =>
                      isActive
                        ? "w-full flex items-center gap-5 p-3 rounded-lg bg-gray-200 text-slate-800 dark:bg-secondary-dark-bg dark:text-slate-200  text-md"
                        : "w-full flex items-center gap-5 p-3 rounded-lg text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray text-md"
                    }
                  >
                    <span className="text-xl inline-block">{link.icon}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
