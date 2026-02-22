import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function EditProfile() {
  return (
    <div className="bg-gradient-to-br from-[#FF6EC7] via-white to-[#7B5FFF] min-h-screen transition-all duration-500 ease-in-out">
      <Navbar />
      <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg mt-6">
        <h1 className="text-3xl font-bold text-[#7B5FFF] mb-4">Edit Profile</h1>
        <form className="flex flex-col gap-4">
          <input
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Username"
            defaultValue="User123"
          />
          <input
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Email"
            type="email"
            defaultValue="user@example.com"
          />
          <button className="px-6 py-3 rounded font-semibold bg-gradient-to-r from-[#FF6EC7] to-[#7B5FFF] text-white hover:opacity-90 transition duration-300">
            Save Changes
          </button>
        </form>
        <Link
          to="/profile"
          className="mt-4 inline-block text-[#FF6EC7] font-semibold hover:underline"
        >
          Back to Profile
        </Link>
      </div>
    </div>
  );
}