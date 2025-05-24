import Details from "@/Component/Details";
import Navbar from "@/Component/Navbar";
import View from "@/Component/View";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [urls, setUrls] = useState([]);
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const storeUser = async () => {
      try {
        const token = await getToken();
        await axios.get(`${backend_url}/api/user/me`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (error) {
        console.error("User sync failed", error);
      }
    };
    if (user) {
      storeUser();
    }
  }, [user]);

  useEffect(() => {
    const fetchAllUrls = async () => {
      try {
        const token = await getToken();
        const res = await axios.get(`${backend_url}/api/url/getUrls`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUrls(res.data.urls);
      } catch (error) {
        console.error("Urls not fetched", error);
      }
    };
    fetchAllUrls();
  }, []);

  return (
    <div className="flex flex-col sm:flex-row rounded-lg h-screen w-screen overflow-hidden">
      {/* NAVBAR */}
      <Navbar />
      <div className="relative bg-white sm:bg-neutral-200 flex-auto flex flex-col sm:flex-row">
        {/* VIEW SECTION */}
        <View urls={urls} setUrls={setUrls} />
        {/* DETAILS SECTION */}
        <Details />
      </div>
    </div>
  );
};

export default Dashboard;
