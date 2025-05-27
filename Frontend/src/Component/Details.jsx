import { Clock, Delete, Edit, Ellipsis, Plus, TrendingUp } from "lucide-react";
import React, { useEffect, useState } from "react";
import SitesDetail from "./SitesDetail";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

const Details = ({
  id,
  sitesDropdown,
  urls,
  setSite,
  setIsOpen,
  onEdit,
  deleteUrl,
  statusMap,
  pingLogs,
  setSelectedMonitor,
}) => {
  const { getToken } = useAuth();
  const [monitor, setMonitor] = useState([]);
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const token = await getToken();
        const res = await axios.get(`${backend_url}/api/url/getUrl/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setMonitor(res.data.selectedMonitor);
      } catch (error) {
        console.error("Url not fetched", error);
      }
    };
    fetchUrl();
  }, [id]);

  return (
    <div className="relative bg-white rounded-md py-4 px-6 w-full sm:mt-10 sm:mr-10 sm:mb-10 overflow-hidden h-[42.5%] sm:h-auto">
      {sitesDropdown ? (
        <div className="absolute bg-white sm:hidden border border-neutral-300 shadow-2xl right-5 w-60 h-fit overflow-y-auto scrollbar-hide">
          {urls.map((monitor, index) => (
            <div
              key={index}
              onClick={() => {
                setSite(monitor._id);
                setSelectedMonitor(monitor);
              }}
              className="flex group justify-between items-baseline h-8 px-1 cursor-pointer hover:bg-gray-100"
            >
              <p>{monitor.url}</p>
              <div className="hidden group-hover:flex gap-2 ">
                <p>
                  <Edit
                    onClick={() => onEdit(monitor)}
                    size={12}
                    className="hover:text-neutral-600"
                  />
                </p>
                <p>
                  <Delete
                    onClick={() => deleteUrl(monitor._id)}
                    size={12}
                    className="hover:text-neutral-600"
                  />
                </p>
              </div>
            </div>
          ))}
          <div
            onClick={() => setIsOpen(true)}
            className="flex justify-center items-center h-8 cursor-pointer hover:bg-gray-100"
          >
            <Plus />
          </div>
        </div>
      ) : null}
      <div className="flex justify-between items-center mb-2">
        <div className="font-semibold">
          {monitor.url ? monitor.url : "No URL selected"}
        </div>
        <Ellipsis className="text-neutral-500 hidden sm:block" />
      </div>
      <div className="flex justify-between items-center mb-2 text-neutral-500 text-xs">
        <div className="flex gap-2 items-center">
          <p>HTTP(s)</p>
          <p>Size:9.1MB</p>
        </div>
        <div>Sort by: Day</div>
      </div>
      <div>//CHARTS//</div>
      <div className="flex justify-between gap-5 items-center mb-4 mt-5">
        <div className="flex gap-2 items-center">
          <TrendingUp className="text-blue-500" />
          <p className="text-neutral-500 text-sm cursor-pointer">Check Log</p>
        </div>
        <div className="flex gap-2 items-center">
          <Clock className="text-blue-500" />
          <p className="text-neutral-500 text-sm">Last check 12:30</p>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-[2fr_1fr_1fr] mt-5 mb-2">
        <div className="text-sm text-neutral-600">Status</div>
        <div className="text-sm text-neutral-600 text-right">Check Time</div>
        <div className="text-sm text-neutral-600 text-right">Response</div>
      </div>
      <div className="overflow-auto h-full scrollbar-hide">
        <SitesDetail statusMap={statusMap} id={id} pingLogs={pingLogs} />
      </div>
    </div>
  );
};

export default Details;
