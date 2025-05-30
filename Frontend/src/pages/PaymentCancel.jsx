import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentCancel = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="text-center mt-10">
      <h1 className="text-2xl font-bold text-red-600">❌ Payment Cancelled</h1>
      <p>You can try again anytime.</p>
    </div>
  );
};

export default PaymentCancel;
