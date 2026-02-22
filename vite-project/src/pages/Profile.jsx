import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <div className="bg-gradient-to-br from-[#FF6EC7] via-white to-[#7B5FFF] min-h-screen transition-all duration-500 ease-in-out">
      <Navbar />
      <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-lg mt-6">
        <h1 className="text-3xl font-bold text-[#7B5FFF] mb-4">Profile</h1>
        <p className="text-gray-700 mb-2"><b>Username:</b> User123</p>
        <p className="text-gray-700 mb-4"><b>Email:</b> user@example.com</p>
        <Link
          to="/edit-profile"
          className="px-6 py-3 rounded font-semibold bg-gradient-to-r from-[#FF6EC7] to-[#7B5FFF] text-white hover:opacity-90 transition duration-300"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
}