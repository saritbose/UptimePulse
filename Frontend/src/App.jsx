import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
