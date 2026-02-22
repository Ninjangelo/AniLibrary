import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-br from-[#FF6EC7] via-white to-[#7B5FFF] min-h-screen transition-all duration-500 ease-in-out">
      <Navbar />
      <div className="p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-[#7B5FFF] mb-6">Dashboard</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            to="/library"
            className="px-6 py-3 rounded font-semibold bg-gradient-to-r from-[#FF6EC7] to-[#7B5FFF] text-white text-center hover:opacity-90 transition duration-300"
          >
            Library
          </Link>
          <Link
            to="/mylist"
            className="px-6 py-3 rounded font-semibold bg-gradient-to-r from-[#FF6EC7] to-[#7B5FFF] text-white text-center hover:opacity-90 transition duration-300"
          >
            My List
          </Link>
          <Link
            to="/profile"
            className="px-6 py-3 rounded font-semibold bg-gradient-to-r from-[#FF6EC7] to-[#7B5FFF] text-white text-center hover:opacity-90 transition duration-300"
          >
            Profile
          </Link>
        </div>
      </div>
    </div>
  );
}