import { Clock, Ellipsis, TrendingUp } from "lucide-react";
import React from "react";
import SitesDetail from "./SitesDetail";

const Details = () => {
  return (
    <div className="bg-white rounded-md py-4 px-6 w-full sm:mt-10 sm:mr-10 sm:mb-10 overflow-hidden h-[42.5%] sm:h-auto">
      <div className="flex justify-between items-center mb-2">
        <div className="font-semibold">www.hello.com</div>
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
          <p className="text-neutral-500 text-sm">Check Log</p>
        </div>
        <div className="flex gap-2 items-center">
          <Clock className="text-blue-500" />
          <p className="text-neutral-500 text-sm">Last check 12:30</p>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-[2fr_1fr_1fr] mt-5 mb-2 gap-1">
        <div className="text-sm text-neutral-600">Status</div>
        <div className="text-sm text-neutral-600 text-right">Check Time</div>
        <div className="text-sm text-neutral-600 text-right">Response(ms)</div>
      </div>
      <div className="overflow-auto h-full scrollbar-hide">
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
        <SitesDetail />
      </div>
    </div>
  );
};

export default Details;
