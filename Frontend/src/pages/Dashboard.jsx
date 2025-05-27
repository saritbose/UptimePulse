import Details from "@/Component/Details";
import Navbar from "@/Component/Navbar";
import View from "@/Component/View";
import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [site, setSite] = useState("");
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [sitesDropdown, setSitesDropdown] = useState(false);
  const [isUrlModalOpen, setIsUrlModalOpen] = useState(false);
  const [selectedMonitor, setSelectedMonitor] = useState(null);
  const [pingLogs, setPingLogs] = useState([]);
  const [monitors, setMonitors] = useState([]);
  const [statusMap, setStatusMap] = useState({});
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  const onEdit = (monitor) => {
    setSelectedMonitor(monitor);
    setIsUrlModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const token = await getToken();
      await axios.delete(`${backend_url}/api/url/deleteUrl/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMonitors((prev) => prev.filter((url) => url._id !== id));
    } catch (error) {
      console.log("Not deleted", error);
    }
    window.location.reload();
  };

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
    const fetchMonitorsAndPing = async () => {
      try {
        const token = await getToken();
        const res = await axios.get(`${backend_url}/api/url/getUrls`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const monitorsData = res.data.monitor;
        setMonitors(monitorsData);
        const updatedStatus = {};
        for (const monitor of monitorsData) {
          const pingRes = await axios.get(
            `${backend_url}/api/ping/${monitor._id}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          updatedStatus[monitor._id] = {
            status: pingRes.data.status,
            responseTime: pingRes.data.responseTime,
            checkedAt: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
        }
        setStatusMap(updatedStatus);
      } catch (error) {
        console.error("Failed to fetch or ping monitors", error);
      }
    };

    fetchMonitorsAndPing();

    const interval = setInterval(fetchMonitorsAndPing, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchPingLogs = async () => {
      try {
        const token = await getToken();
        const res = await axios.get(
          `${backend_url}/api/ping/log/${selectedMonitor._id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setPingLogs(res.data.logs);
      } catch (error) {
        console.error("Failed to fetch ping logs", error);
      }
    };
    if (!selectedMonitor || !selectedMonitor._id) {
      return;
    }
    if (selectedMonitor) {
      fetchPingLogs();
    }
  }, [selectedMonitor]);

  return (
    <div className=" flex flex-col sm:flex-row rounded-lg h-screen w-screen overflow-hidden">
      {/* NAVBAR */}
      <Navbar mobileNavbar={mobileNavbar} setMobileNavbar={setMobileNavbar} />
      <div className="relative bg-white sm:bg-neutral-200 flex-auto flex flex-col sm:flex-row">
        {/* VIEW SECTION */}
        <View
          urls={monitors}
          setSite={setSite}
          mobileNavbar={mobileNavbar}
          sitesDropdown={sitesDropdown}
          setSitesDropdown={setSitesDropdown}
          statusMap={statusMap}
          isOpen={isUrlModalOpen}
          setIsOpen={setIsUrlModalOpen}
          selectedMonitor={selectedMonitor}
          setSelectedMonitor={setSelectedMonitor}
          onEdit={onEdit}
          deleteUrl={handleDelete}
        />
        {/* DETAILS SECTION */}
        <Details
          id={site}
          sitesDropdown={sitesDropdown}
          urls={monitors}
          setSite={setSite}
          setIsOpen={setIsUrlModalOpen}
          onEdit={onEdit}
          deleteUrl={handleDelete}
          pingLogs={pingLogs}
          setSelectedMonitor={setSelectedMonitor}
        />
      </div>
    </div>
  );
};

export default Dashboard;
