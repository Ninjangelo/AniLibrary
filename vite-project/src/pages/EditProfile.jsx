import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function EditProfile() {
  return (
    <div className="min-h-screen bg-[#121212] pb-10">
      <Navbar />
      <div className="max-w-[1060px] mx-auto mt-4 text-sm">
        
        <div className="border-b border-gray-600 mb-4 pb-1">
          <h1 className="text-white text-xl font-bold">Profile Settings</h1>
        </div>

        <div className="bg-[#1e1e1e] border border-[#2a2a2a] max-w-2xl p-6 rounded-sm">
          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Username</label>
              <input
                className="w-full bg-[#121212] border border-[#333] text-white rounded-sm px-3 py-2 focus:outline-none focus:border-[#2E51A2]"
                defaultValue="TestUser"
              />
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Email</label>
              <input
                className="w-full bg-[#121212] border border-[#333] text-white rounded-sm px-3 py-2 focus:outline-none focus:border-[#2E51A2]"
                type="email"
                defaultValue="user@example.com"
              />
            </div>
            
            <div className="pt-2 border-t border-[#2a2a2a] flex justify-between items-center">
              <Link to="/profile" className="text-[#729bce] text-xs hover:underline">
                ← Back to Profile
              </Link>
              <button className="bg-[#2E51A2] text-white font-bold py-2 px-6 rounded-sm hover:bg-[#3b63bf] transition-colors">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}