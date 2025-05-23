import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import { RedirectToSignIn, useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) {
    return null;
  }
  return isSignedIn ? children : <RedirectToSignIn />;
};

const App = () => {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route
          path={"/dashboard"}
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
