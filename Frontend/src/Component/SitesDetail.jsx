import React from "react";

const SitesDetail = () => {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] mb-5">
      <div className="flex items-center justify-start gap-2 ">
        <div className="bg-green-700 rounded-full w-2 h-2 "></div>
        <div>Site is currently up</div>
      </div>
      <div className="text-right">00:00 AM</div>
      <div className="text-right">
        999 <span className="text-xs font-light italic">ms</span>
      </div>
    </div>
  );
};

export default SitesDetail;
