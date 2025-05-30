import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const UrlModal = ({ isOpen, onClose, onSave, monitor }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const [urlInput, setUrlInput] = useState("");
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    if (isOpen) {
      if (monitor) {
        setUrlInput(monitor.url);
      } else {
        setUrlInput("");
      }
    }
  }, [isOpen, monitor]);

  const handleSubmit = async () => {
    const token = await getToken();
    if (!urlInput.trim()) {
      return;
    }
    try {
      if (monitor) {
        await axios.put(
          `${backend_url}/api/url/editUrl/${monitor._id}`,
          { urlInput },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } else {
        await axios.post(
          `${backend_url}/api/url/addUrl`,
          { userId: user.id, url: urlInput },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }
      await onSave();
      onClose();
    } catch (error) {
      console.error("URL action failed", error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-xs flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add Website</h2>
        <input
          type="text"
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
          placeholder="Enter website URL"
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {monitor ? "Save" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrlModal;
