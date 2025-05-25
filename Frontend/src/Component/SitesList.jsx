import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import React from "react";

const SitesList = ({ urls, setUrls }) => {
  const { getToken } = useAuth();

  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const handleDelete = async (id) => {
    try {
      const token = await getToken();
      await axios.delete(`${backend_url}/api/url/deleteUrl/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUrls((prev) => prev.filter((url) => url._id !== id));
    } catch (error) {
      console.log("Not deleted", error);
    }
  };
  return urls.map((monitor, index) => (
    <div
      key={index}
      className="group relative w-full bg-white rounded-md h-18 p-4 flex justify-between items-baseline mb-4 transform transition-transform duration-300 hover:scale-95 shadow-lg hover:shadow-2xl cursor-pointer"
    >
      <div className="flex flex-col items-baseline ">
        <div className="text-neutral-500 text-xs">Website HTTP(s)</div>
        <div className="flex justify-between items-baseline gap-2">
          <div className="bg-green-700 rounded-full w-2 h-2 "></div>
          <div>{monitor.url}</div>
        </div>
      </div>
      <div className="flex flex-col text-right">
        <div className="text-neutral-500 text-xs">Response(ms)</div>
        <div>86</div>
      </div>
      <div className="hidden group-hover:flex gap-2 absolute bottom-2.5 right-2 text-xs text-blue-600 cursor-pointer bg-white h-2">
        <p className="hover:text-blue-500">Edit</p>
        <p
          onClick={() => handleDelete(monitor._id)}
          className="hover:text-blue-500"
        >
          Delete
        </p>
      </div>
    </div>
  ));
};

export default SitesList;
