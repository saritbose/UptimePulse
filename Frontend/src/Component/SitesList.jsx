import { Plus } from "lucide-react";
import React from "react";

const SitesList = ({
  urls,
  setSite,
  onEdit,
  statusMap,
  deleteUrl,
  setSelectedMonitor,
  setAddUrl,
  setIsOpen,
}) => {
  return (
    <div>
      {urls.map((monitor, index) => (
        <div
          key={index}
          onClick={() => {
            setSite(monitor._id);
            setSelectedMonitor(monitor);
          }}
          className="group relative w-full bg-white rounded-md h-18 p-4 flex justify-between items-baseline mb-4 transform transition-transform duration-300 hover:scale-95 shadow-lg hover:shadow-2xl cursor-pointer"
        >
          <div className="flex flex-col items-baseline ">
            <div className="text-neutral-500 text-xs">Website HTTP(s)</div>
            <div className="flex justify-between items-baseline gap-2">
              {statusMap[monitor._id] && (
                <div
                  className={`rounded-full w-2 h-2 ${
                    statusMap[monitor._id].status === "up"
                      ? "bg-green-500"
                      : statusMap[monitor._id].status === "slow"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                ></div>
              )}
              <div>{monitor.url}</div>
            </div>
          </div>
          <div className="flex flex-col text-right">
            <div className="text-neutral-500 text-xs">Response(ms)</div>
            {statusMap[monitor._id] && (
              <div>{statusMap[monitor._id].responseTime}</div>
            )}
          </div>
          <div className="hidden group-hover:flex gap-2 absolute bottom-2.5 right-2 text-xs text-blue-600 cursor-pointer bg-white h-2">
            <p onClick={() => onEdit(monitor)} className="hover:text-blue-500">
              Edit
            </p>
            <p
              onClick={() => deleteUrl(monitor._id)}
              className="hover:text-blue-500"
            >
              Delete
            </p>
          </div>
        </div>
      ))}
      <div
        onClick={() => {
          setIsOpen(true);
          setAddUrl("");
        }}
        className="w-full group bg-white rounded-md h-15 p-4 hidden sm:flex items-center justify-center border-gray-300 cursor-pointer"
      >
        <Plus className="text-neutral-500" />
      </div>
    </div>
  );
};

export default SitesList;
