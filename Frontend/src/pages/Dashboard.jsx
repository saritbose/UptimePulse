import SitesList from "@/Component/SitesList";
import {
  Bird,
  Cat,
  Clock,
  Dog,
  Ellipsis,
  Globe,
  LogOut,
  Settings,
  TrendingUp,
} from "lucide-react";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex rounded-lg h-screen w-screen overflow-hidden">
      <div className="flex flex-col justify-between py-3 items-center bg-blue-600 w-12">
        <div className="flex flex-col gap-2 items-center">
          <div className="rounded-lg bg-white w-8 h-8 text-center text-lg">
            T
          </div>
          <div className="rounded-lg bg-white w-8 h-8 text-center text-xl cursor-pointer">
            +
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="rounded-lg bg-white w-8 h-8 p-1.5 cursor-pointer ">
            <Settings size={20} />
          </div>
          <div className="rounded-lg bg-white w-8 h-8 p-1.5 cursor-pointer">
            <LogOut size={20} />
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div>
            <Cat className="text-white" />
          </div>
          <div>
            <Bird className="text-white" />
          </div>
          <div>
            <Dog className="text-white" />
          </div>
        </div>
      </div>
      <div className="bg-neutral-200 flex-1 ">
        <div className="my-7 flex justify-evenly gap-5">
          <div className="w-80 ml-5">
            <div className="flex gap-3">
              <div className="border p-4 w-25 rounded-md bg-white">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-3xl">10</p>
                  <div className="bg-green-700 w-2 h-2"></div>
                </div>
                <p className="text-neutral-500 text-sm">Working fine</p>
              </div>
              <div className="border p-4 w-25 rounded-md bg-white">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-3xl">0</p>
                  <div className="bg-yellow-500 w-2 h-2"></div>
                </div>
                <p className="text-neutral-500 text-sm">Working slower</p>
              </div>
              <div className="border p-4 w-25 rounded-md bg-white">
                <div className="flex items-start justify-between mb-3">
                  <p className="text-3xl">1</p>
                  <div className="bg-red-700 w-2 h-2"></div>
                </div>
                <p className="text-neutral-500 text-sm">Not working</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-10 mb-5">
              <div className="flex gap-2 items-center">
                <Globe size={25} />
                <p>6 sites</p>
              </div>
              <div>Sort by: All sites</div>
            </div>
            <div className="overflow-auto h-[52%] scrollbar-hide">
              <SitesList />
              <SitesList />
              <SitesList />
              <SitesList />
              <SitesList />
              <SitesList />
              <SitesList />
              <SitesList />
            </div>
          </div>
          <div className="bg-white rounded-md p-4 w-[40%] mr-5 hidden flex-1 md:block border-2 border-black">
            <div className="flex justify-between items-center mb-2">
              <div>www.hello.com</div>
              <Ellipsis />
            </div>
            <div className="flex justify-between items-center mb-2">
              <div className="flex gap-2 items-center">
                <p>HTTP(s)</p>
                <p>Size:9.1MB</p>
              </div>
              <div>Sort by: Day</div>
            </div>
            <div>CHARTS</div>
            <div className="flex justify-between gap-5 items-center mb-4 mt-5">
              <div className="flex gap-2 items-center">
                <TrendingUp />
                <p>Check Log</p>
              </div>
              <div className="flex gap-2 items-center">
                <Clock />
                <p>Last check 12:30</p>
              </div>
            </div>
            <hr />
            <div className="grid grid-cols-[2fr_1fr_1fr] mt-5">
              <div className="border-black border">Status</div>
              <div className="border-black border">Check Time</div>
              <div className="border-black border">Response(ms)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
