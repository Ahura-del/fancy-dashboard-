import React from "react";
import { SiShopify } from "react-icons/si";
import { FaRegTimesCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { links } from "../data/dummy";
import { useStateContext } from "../context/ContextProvider";
const Sidebar = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg bg-gray-200 text-slate-800 dark:bg-secondary-dark-bg dark:text-slate-200 text-black text-md";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 transition-colors duration-200 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray text-md";
  return (
    <div className="pt-4 pb-10 px-6 overflow-auto h-screen">
      {activeMenu && (
        <>
          <div className=" flex  items-center  justify-between">
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
              <>
                <h2
                  key={index}
                  className="text-lg uppercase font-bold text-gray-500 my-3"
                >
                  {link.title}
                </h2>
                <ul>
                  {link.links.map((link, ind) => (
                    <li key={ind}>
                      <NavLink
                        to={`/${link.name}`}
                        className={({ isActive }) =>
                          isActive ? activeLink : normalLink
                        }
                      >
                        <span className="text-xl inline-block">
                          {link.icon}
                        </span>
                        <span className="text-md inline-block capitalize">
                          {link.name}
                        </span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
