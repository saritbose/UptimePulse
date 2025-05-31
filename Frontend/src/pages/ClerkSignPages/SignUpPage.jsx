import { SignUp } from "@clerk/clerk-react";
import React from "react";

const SignUpPage = () => {
  return <SignUp path="/sign-up" routing="path" />;
};

export default SignUpPage;
