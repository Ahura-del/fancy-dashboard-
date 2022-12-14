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
  EditorPage,
  Employees,
  Kanban,
  Orders,
  Bar,
  Financial,
  LineDiagram,
  Pie,
  Pyramid,
  Stacked,
  Area,
} from "./pages";
import { Route, Routes } from "react-router-dom";

import { useStateContext } from "./context/ContextProvider";
import { Tooltip } from "@mui/material";

const App = () => {
  const { activeMenu , themeSettings , setThemeSettings , currentColor,currentMode } = useStateContext();
  
  return (
    // <div className="grid grid-cols-12 w-screen h-screen overflow-hidden  dark:bg-main-bg bg-main-bg">
    <div className={currentMode === "Dark" ? 'dark' : ''}>

    <div className="w-full h-screen overflow-hidden flex dark:bg-main-dark-bg bg-main-bg ">
      {themeSettings && <ThemeSettings/>}
      {activeMenu ? (
        
        <div className="basis-1/5 fixed z-30 dark:bg-main-dark-bg bg-white " >
        <Sidebar/>
      </div>
        ):(
          <div className="basis-0 w-0 md:basis-10 md:w-fit" >
        <Sidebar/>
      </div>
        )}
      
      <div className="w-full h-full overflow-y-scroll">
        <div className="w-[90%] mx-auto ">
<div className="fixed z-20 px-5 top-0 right-0 left-0 md:ml-28 dark:bg-main-dark-bg bg-main-bg ">

      <Navbar />
</div>
      <div className="w-full mx-auto h-full mt-20 overflow-y-scroll">

      <Routes>
        <Route path="/" element={<Ecommerce />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/color-picker" element={<ColorPicker />} />
        <Route path="/color-mapping" element={<ColorMapping />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/area" element={<Area />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/line" element={<LineDiagram />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/pyramid" element={<Pyramid />} />
        <Route path="/stacked" element={<Stacked />} />
      </Routes>
      </div>
        </div>

      </div>
   
      <div
        className="fixed bottom-4 right-5 w-12 h-12 flex justify-center items-center rounded-full"
        style={{ background: currentColor }}
      >
        <Tooltip title="Settings" placement="top">
          <button type="button" onClick={()=>setThemeSettings(true)}>
            <FiSettings className="text-slate-100 text-4xl" />
          </button>
        </Tooltip>
      </div>
    
      </div>
      </div>

    //  <div
    // className="fixed bottom-2 right-5 w-12 h-12 flex justify-center items-center rounded-full"
    // style={{ background: "blue" }}
    // >
    // <Tooltip title="Settings" placement="top" >

    // <button type="button">
    //   <FiSettings className="text-slate-100 text-4xl" />
    // </button>
    // </Tooltip>
    // </div>

    // <>
    //   <div className="w-full h-screen  relative flex">
    //     {/* setting button */}
    // <div
    //   className="fixed bottom-2 right-5 w-12 h-12 flex justify-center items-center rounded-full"
    //   style={{ background: "blue" }}
    // >
    //   <Tooltip title="Settings" placement="top" >

    //   <button type="button">
    //     <FiSettings className="text-slate-100 text-4xl" />
    //   </button>
    //   </Tooltip>
    // </div>

    //     {activeMenu ? (
    //       <div className="w-72 fixed z-1000 dark:bg-secondary-dark-bg bg-white ">
    //         <Sidebar />
    //       </div>
    //     ) : (
    //       <div className="md:w-24 w-0 dark:bg-secondary-dark-bg">
    //         <Sidebar />
    //       </div>
    //     )}

    //     <div
    //       className={`dark:bg-main-bg bg-main-bg overflow-hidden max-h-screen w-full ${
    //         activeMenu ? "md:ml-72" : "flex-2"
    //       }`}
    //     >
    //       <div className="static bg-main-bg dark:bg-main-dark-bg w-full">
    //         <Navbar />
    //       </div>
    // <div className="w-[95%] max-h-screen mt-5 pb-20 overflow-y-scroll overflow-x-hidden mx-auto">
      // <Routes>
      //   <Route path="/" element={<Ecommerce />} />
      //   <Route path="/calendar" element={<Calendar />} />
      //   <Route path="/color-picker" element={<ColorPicker />} />
      //   <Route path="/color-mapping" element={<ColorMapping />} />
      //   <Route path="/customers" element={<Customers />} />
      //   <Route path="/editor" element={<Editor />} />
      //   <Route path="/employees" element={<Employees />} />
      //   <Route path="/kanban" element={<Kanban />} />
      //   <Route path="/orders" element={<Orders />} />
      //   <Route path="/area" element={<Area />} />
      //   <Route path="/bar" element={<Bar />} />
      //   <Route path="/financial" element={<Financial />} />
      //   <Route path="/line" element={<Line />} />
      //   <Route path="/pie" element={<Pie />} />
      //   <Route path="/pyramid" element={<Pyramid />} />
      //   <Route path="/stacked" element={<Stacked />} />
      // </Routes>
    // </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default App;
