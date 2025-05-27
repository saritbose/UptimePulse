import React from "react";

const SitesDetail = ({ statusMap, id, pingLogs }) => {
  const logs = pingLogs.filter((log) => log.monitorId === id);
  return logs.map((log) => (
    <div key={log._id} className="grid grid-cols-[2fr_1fr_1fr] mb-5">
      <div className="flex items-center justify-start gap-2 ">
        <div
          className={`rounded-full w-2 h-2 ${
            log.status === "up"
              ? "bg-green-700"
              : log.status === "slow"
              ? "bg-yellow-500"
              : "bg-red-700"
          }`}
        ></div>
        <div>{`Site is currently ${log.status}`}</div>
      </div>
      <div className="text-right">
        {" "}
        {new Date(log.checkedAt).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })}
      </div>
      <div className="text-right">
        {log.responseTime} <span className="text-xs font-light italic">ms</span>
      </div>
    </div>
  ));
};

export default SitesDetail;
