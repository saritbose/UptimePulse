import { useAuth, useUser } from "@clerk/clerk-react";
import axios from "axios";
import React from "react";

const UrlModal = ({ isOpen, onClose, onSave, url, setUrl }) => {
  const { user } = useUser();
  const { getToken } = useAuth();
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  if (!isOpen) return null;

  const storeUrl = async () => {
    try {
      const token = await getToken();
      await axios.post(
        `${backend_url}/api/url/addUrl`,
        { userId: user.id, url: url },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      await onSave();
    } catch (error) {
      console.error("Url not added", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-xs flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-xl w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add Website</h2>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
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
            onClick={() => (user ? storeUrl() : null)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrlModal;
