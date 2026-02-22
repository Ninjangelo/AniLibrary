import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full">
      {/* Top Bar (Black) */}
      <div className="bg-black text-white h-12 flex items-center justify-between px-4">
        <Link to="/dashboard" className="text-2xl font-bold font-sans tracking-tighter">
          AniLibrary<span className="text-gray-400 text-xs ml-2 font-normal">nerd spot</span>
        </Link>
        <div className="flex items-center gap-4 text-sm font-semibold">
          <span className="text-gray-400 cursor-pointer hover:text-white">Hide Ads</span>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-gray-600 rounded"></div> {/* Icon placeholder */}
            <div className="w-6 h-6 bg-gray-600 rounded relative">
               <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] px-1 rounded-full">7</span>
            </div>
            <Link to="/profile" className="flex items-center gap-2 ml-2">
              <span>TestUser</span>
              <img src="https://via.placeholder.com/30" alt="Avatar" className="w-6 h-6 object-cover" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Nav (MAL Blue) */}
      <nav className="bg-[#2E51A2] text-white flex items-center justify-between px-4 h-10 shadow-md">
        <div className="flex font-bold text-[14px]">
          <Link to="/library" className="px-3 hover:bg-[#1d3670] h-10 flex items-center">Anime</Link>
          <span className="px-3 hover:bg-[#1d3670] h-10 flex items-center cursor-pointer">Manga</span>
          <span className="px-3 hover:bg-[#1d3670] h-10 flex items-center cursor-pointer">Community</span>
          <Link to="/mylist" className="px-3 hover:bg-[#1d3670] h-10 flex items-center">My List</Link>
        </div>
        <div className="flex gap-2 text-black">
          <input 
            type="text" 
            placeholder="Search Anime, Manga, and more..." 
            className="px-2 py-1 text-xs w-64 rounded-sm outline-none"
          />
        </div>
      </nav>
    </div>
  );
}