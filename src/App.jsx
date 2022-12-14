import React from "react";
import "./App.css";
import { FiSettings } from "react-icons/fi";
import { Navbar, Footer, Sidebar, ThemeSettings, Cart } from "./components";
import {
  Ecommerce,

  ColorMapping,

  Customers,
  EditorPage,
  Employees,

  Orders,
  Bar,
  Financial,
  LineDiagram,
  Pie,
  Pyramid,
  Area,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import { useStateContext } from "./context/ContextProvider";
import { Tooltip } from "@mui/material";

const App = () => {
  const {
    activeMenu,
    themeSettings,
    isClicked,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="w-full h-screen overflow-hidden flex dark:bg-main-dark-bg bg-main-bg ">
        {themeSettings && <ThemeSettings />}
        {isClicked.cart && <Cart />}
        {activeMenu ? (
          <div className="basis-1/5 fixed z-30 dark:bg-main-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="basis-0 w-0 md:basis-10 md:w-fit">
            <Sidebar />
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
              
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/editor" element={<EditorPage />} />
                <Route path="/employees" element={<Employees />} />
                
                <Route path="/orders" element={<Orders />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/line" element={<LineDiagram />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/pyramid" element={<Pyramid />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>

        <div
          className="fixed bottom-4 right-5 w-12 h-12 flex justify-center items-center rounded-full"
          style={{ background: currentColor }}
        >
          <Tooltip title="Settings" placement="top">
            <button type="button" onClick={() => setThemeSettings(true)}>
              <FiSettings className="text-slate-100 text-4xl" />
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default App;
