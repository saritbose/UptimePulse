import Details from "@/Component/Details";
import Navbar from "@/Component/Navbar";
import View from "@/Component/View";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col sm:flex-row rounded-lg h-screen w-screen overflow-hidden">
      {/* NAVBAR */}
      <Navbar />
      <div className="bg-white sm:bg-neutral-200 flex-auto flex flex-col sm:flex-row">
        {/* VIEW SECTION */}
        <View />
        {/* DETAILS SECTION */}
        <Details />
      </div>
    </div>
  );
};

export default Dashboard;
