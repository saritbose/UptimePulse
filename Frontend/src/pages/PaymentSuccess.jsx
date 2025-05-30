import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold text-green-600">
        🎉 Payment Successful!
      </h1>
      <p>Thanks for subscribing. You now have access to premium features.</p>
    </div>
  );
};

export default PaymentSuccess;
