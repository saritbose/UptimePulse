import React, { useState } from "react";
import { Ellipsis, Globe, Plus } from "lucide-react";
import { SignOutButton } from "@clerk/clerk-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SitesList from "./Components/SitesList";
import UrlModal from "./Components/UrlModal";
import { toast } from "react-toastify";

const View = ({
  urls,
  setSite,
  mobileNavbar,
  sitesDropdown,
  setSitesDropdown,
  statusMap,
  isOpen,
  setIsOpen,
  selectedMonitor,
  setSelectedMonitor,
  onEdit,
  deleteUrl,
  fetchUsage,
  usage,
}) => {
  const [addUrl, setAddUrl] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const statusSummary = {
    up: 0,
    slow: 0,
    down: 0,
  };

  if (statusMap && Object.keys(statusMap).length > 0) {
    Object.values(statusMap).forEach((entry) => {
      if (entry.status === "up") statusSummary.up++;
      else if (entry.status === "slow") statusSummary.slow++;
      else if (entry.status === "down") statusSummary.down++;
    });
  }

  const handleSave = async () => {
    setIsOpen(false);
    setAddUrl("");
    await fetchUsage();
    window.location.reload();
  };

  const filteredUrls =
    statusFilter === "all"
      ? urls
      : urls.filter((url) => statusMap[url._id]?.status === statusFilter);

  return (
    <div className="relative flex justify-start sm:mt-10 sm:mx-10 sm:mb-10">
      <div className="flex-auto overflow-hidden">
        <div
          className={`absolute bg-white h-32 w-32 flex flex-col justify-evenly border-2 border-gray-300 ${
            mobileNavbar ? "block" : "hidden"
          }`}
        >
          <div className="text-xl ml-5 cursor-pointer hover:scale-110">
            Setting
          </div>
          <SignOutButton>
            <div className="text-xl ml-5 cursor-pointer hover:scale-110">
              LogOut
            </div>
          </SignOutButton>
        </div>
        <div className="flex gap-5 sm:gap-3 justify-center ">
          <div className=" p-4 w-25 rounded-md bg-white border-2 border-gray-300 hover:border-green-200">
            <div className="flex items-start justify-between mb-3">
              <p className="text-3xl">{statusSummary.up}</p>
              <div className="bg-green-700 rounded-full w-2 h-2"></div>
            </div>
            <p className="text-neutral-500 text-sm">Working fine</p>
          </div>
          <div className=" p-4 w-25 rounded-md bg-white border-2 border-gray-300 hover:border-yellow-100">
            <div className="flex items-start justify-between mb-3">
              <p className="text-3xl">{statusSummary.slow}</p>
              <div className="bg-yellow-500 rounded-full w-2 h-2"></div>
            </div>
            <p className="text-neutral-500 text-sm">Working slower</p>
          </div>
          <div className=" p-4 w-25 rounded-md bg-white border-2 border-gray-300 hover:border-red-200">
            <div className="flex items-start justify-between mb-3">
              <p className="text-3xl">{statusSummary.down}</p>
              <div className="bg-red-700 rounded-full w-2 h-2"></div>
            </div>
            <p className="text-neutral-500 text-sm">Not working</p>
          </div>
        </div>
        <div className="flex w-full justify-between items-center mt-5 mb-0 sm:mb-5 px-5 sm:px-0.5">
          <div className="flex gap-2 items-center">
            <Globe className="text-blue-500" size={20} />
            <p className="text-neutral-500 text-sm">
              {usage.used}/{usage.total === Infinity ? "∞" : usage.total} sites
            </p>
          </div>
          <div className="hidden sm:flex gap-0 items-baseline text-neutral-500 text-sm">
            <span className="text-nowrap">Sort by:</span>
            <Select onValueChange={(val) => setStatusFilter(val)}>
              <SelectTrigger className="w-[68%]">
                <SelectValue placeholder="All Sites" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sites</SelectItem>
                <SelectItem value="up">Working fine</SelectItem>
                <SelectItem value="slow">Working slow</SelectItem>
                <SelectItem value="down">Not working</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div
            onClick={() => setSitesDropdown(!sitesDropdown)}
            className="sm:hidden"
          >
            {sitesDropdown ? (
              <Plus className="cursor-pointer rotate-45" />
            ) : (
              <Ellipsis className="sm:hidden cursor-pointer" />
            )}
          </div>
        </div>
        <div className="h-[70%]">
          <div className="h-full hidden sm:block overflow-auto scrollbar-hide">
            <SitesList
              urls={filteredUrls}
              setSite={setSite}
              onEdit={onEdit}
              statusMap={statusMap}
              deleteUrl={deleteUrl}
              setSelectedMonitor={setSelectedMonitor}
              setIsOpen={setIsOpen}
              usage={usage}
            />
          </div>
        </div>
        <UrlModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSave={handleSave}
          monitor={selectedMonitor}
        />
      </div>
    </div>
  );
};

export default View;
