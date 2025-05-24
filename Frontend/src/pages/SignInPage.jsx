import { SignIn } from "@clerk/clerk-react";
import React from "react";

const SignInPage = () => {
  return <SignIn path="/sign-in" routing="path" />;
};

export default SignInPage;
