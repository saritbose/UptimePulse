import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard";
import { RedirectToSignIn, useUser } from "@clerk/clerk-react";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

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
        <Route path={"/sign-in"} element={<SignInPage />} />
        <Route path={"/sign-up"} element={<SignUpPage />} />
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
