import React from "react";
import "./App.css";
import { FiSettings } from "react-icons/fi";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Calendar,
  ColorMapping,
  ColorPicker,
  Customers,
  Editor,
  Employees,
  Kanban,
  Orders,
  Bar,
  Financial,
  Line,
  Pie,
  Pyramid,
  Stacked,
  Area,
} from "./pages";
import { Route, Routes } from "react-router-dom";

import { useStateContext } from "./context/ContextProvider";
import { Tooltip } from "@mui/material";

const App = () => {
  const { activeMenu } = useStateContext();
  return (
    <>
      <div className="w-full min-h-screen relative flex">
        {/* setting button */}
        <div
          className="fixed bottom-2 right-5 w-12 h-12 flex justify-center items-center rounded-full"
          style={{ background: "blue" }}
        >
          <Tooltip title="Settings" placement="top" >

          <button type="button">
            <FiSettings className="text-slate-100 text-4xl" />
          </button>
          </Tooltip>
        </div>

        {activeMenu ? (
          <div className="w-72 fixed dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}

        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? "md:ml-72" : "flex-2"
          }`}
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg w-full">
            <Navbar />
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Ecommerce />} />
              <Route path="/calender" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/kanban" element={<Kanban />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/area" element={<Area />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/pyramid" element={<Pyramid />} />
              <Route path="/stacked" element={<Stacked />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
