import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useUser } from "@clerk/clerk-react";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignInPage from "./pages/ClerkSignPages/SignInPage";
import SignUpPage from "./pages/ClerkSignPages/SignUpPage";
import PaymentSuccess from "./pages/PaymentResult/PaymentSuccess";
import PaymentCancel from "./pages/PaymentResult/PaymentCancel";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) {
    return null;
  }
  return isSignedIn ? children : <Home />;
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
        <Route path={"/success"} element={<PaymentSuccess />} />
        <Route path={"/cancel"} element={<PaymentCancel />} />
      </Routes>
    </>
  );
};

export default App;
