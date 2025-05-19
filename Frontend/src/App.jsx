import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path={"/"} element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
