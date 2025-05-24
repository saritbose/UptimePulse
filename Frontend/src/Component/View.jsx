import React, { useState } from "react";
import SitesList from "./SitesList";
import { Ellipsis, Globe, Plus } from "lucide-react";
import UrlModal from "./UrlModal";

const View = ({ urls, setUrls }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [addUrl, setAddUrl] = useState("");

  const handleSave = () => {
    setIsOpen(false);
    setAddUrl("");
    window.location.reload();
  };

  return (
    <div className=" flex justify-start sm:mt-10 sm:mx-10 sm:mb-10">
      <div className="flex-auto overflow-hidden">
        <div className="flex gap-5 sm:gap-3 justify-center ">
          <div className=" p-4 w-25 rounded-md bg-white border-2 border-gray-300 hover:border-green-200">
            <div className="flex items-start justify-between mb-3">
              <p className="text-3xl">10</p>
              <div className="bg-green-700 rounded-full w-2 h-2"></div>
            </div>
            <p className="text-neutral-500 text-sm">Working fine</p>
          </div>
          <div className=" p-4 w-25 rounded-md bg-white border-2 border-gray-300 hover:border-yellow-100">
            <div className="flex items-start justify-between mb-3">
              <p className="text-3xl">0</p>
              <div className="bg-yellow-500 rounded-full w-2 h-2"></div>
            </div>
            <p className="text-neutral-500 text-sm">Working slower</p>
          </div>
          <div className=" p-4 w-25 rounded-md bg-white border-2 border-gray-300 hover:border-red-200">
            <div className="flex items-start justify-between mb-3">
              <p className="text-3xl">1</p>
              <div className="bg-red-700 rounded-full w-2 h-2"></div>
            </div>
            <p className="text-neutral-500 text-sm">Not working</p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5 mb-0 sm:mb-5 mx-5">
          <div className="flex gap-2 items-center">
            <Globe className="text-blue-500" size={20} />
            <p className="text-neutral-500 text-sm">{urls.length} sites</p>
          </div>
          <div className="hidden sm:block text-neutral-500 text-sm">
            Sort by: All sites
          </div>
          <Ellipsis className="sm:hidden cursor-pointer" />
        </div>
        <div className="h-[63%]">
          <div className="h-full hidden sm:block overflow-auto scrollbar-hide">
            <SitesList urls={urls} setUrls={setUrls} />
          </div>
        </div>
        <div
          onClick={() => setIsOpen(true)}
          className="w-full group bg-white rounded-md h-18 p-4 hidden sm:flex items-center justify-center border-gray-300 cursor-pointer"
        >
          <Plus className="text-neutral-500" />
        </div>
        <UrlModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onSave={handleSave}
          url={addUrl}
          setUrl={setAddUrl}
        />
      </div>
    </div>
  );
};

export default View;
