import React from "react";

const SitesList = () => {
  return (
    <div className="w-full bg-white rounded-md h-18 p-4 flex justify-between items-baseline mb-4">
      <div className="flex flex-col items-baseline ">
        <div className="text-neutral-500 text-xs">Website HTTP(s)</div>
        <div className="flex justify-between items-baseline gap-2">
          <div className="bg-green-700 rounded-xs w-2 h-2 "></div>
          <div>www.hello.com</div>
        </div>
      </div>
      <div className="flex flex-col text-right">
        <div className="text-neutral-500 text-xs">Response(ms)</div>
        <div>86</div>
      </div>
    </div>
  );
};

export default SitesList;
