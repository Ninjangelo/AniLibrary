import React from "react";
import Navbar from "../components/Navbar";

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#121212] pb-10">
      <Navbar />
      <div className="max-w-[1060px] mx-auto mt-4">
        
        {/* Profile Header */}
        <div className="bg-[#1e1e1e] border-t-2 border-[#2E51A2] p-2 flex justify-between items-center mb-4 text-white font-bold">
          <span>TestUser's Profile</span>
          <div className="flex gap-4 text-xs text-gray-400 font-normal">
            <span className="cursor-pointer hover:underline">✎ About Me Design</span>
            <span className="cursor-pointer hover:underline">⚙ Profile Settings</span>
          </div>
        </div>

        <div className="flex gap-4">
          {/* Left Sidebar */}
          <div className="w-[225px] flex-shrink-0">
            {/* Avatar Placeholder */}
            <div className="w-full h-56 bg-gradient-to-r from-blue-900 via-blue-200 to-gray-500 mb-2"></div>
            
            <table className="w-full text-xs text-gray-300 mb-4 border-b border-[#2a2a2a] pb-2">
              <tbody>
                <tr><td className="py-1 font-bold">Last Online</td><td className="text-right">Now</td></tr>
                <tr><td className="py-1 font-bold">Gender</td><td className="text-right">Male</td></tr>
                <tr><td className="py-1 font-bold">Joined</td><td className="text-right">Jan 16, 2021</td></tr>
              </tbody>
            </table>

            <div className="flex gap-2 mb-4">
              <button className="flex-1 bg-[#2E51A2] text-white py-1 rounded text-xs font-bold hover:bg-[#3b63bf]">Anime List</button>
              <button className="flex-1 bg-[#2E51A2] text-white py-1 rounded text-xs font-bold hover:bg-[#3b63bf]">Manga List</button>
            </div>
            
            <ul className="text-xs space-y-2 border-b border-[#2a2a2a] pb-2 font-bold text-gray-300">
              <li className="hover:text-white cursor-pointer">Statistics</li>
              <li className="hover:text-white cursor-pointer">History</li>
              <li className="hover:text-white cursor-pointer">Favorites</li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="flex-grow flex flex-col gap-6">
            <p className="text-xs">The shape of your voice</p>
            
            <div>
              <h2 className="text-white font-bold border-b border-[#2a2a2a] pb-1 mb-3">Statistics</h2>
              
              <div className="flex justify-between text-xs mb-2">
                <span className="text-white font-bold">Anime Stats</span>
                <span className="text-[#729bce] cursor-pointer hover:underline">All Anime Stats</span>
              </div>
              
              <div className="flex justify-between text-xs mb-2">
                <span>Days: <span className="text-white font-bold">56.8</span></span>
                <span>Mean Score: <span className="text-white font-bold">6.90</span></span>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full h-3 flex mb-4">
                <div className="bg-[#2E51A2] w-[70%] h-full"></div> {/* Completed */}
                <div className="bg-[#2db039] w-[5%] h-full"></div> {/* Watching */}
                <div className="bg-[#f1c83e] w-[10%] h-full"></div> {/* On Hold */}
                <div className="bg-[#a12f31] w-[15%] h-full"></div> {/* Dropped */}
              </div>

              <div className="flex gap-8 text-xs">
                <ul className="space-y-1">
                  <li><span className="inline-block w-3 h-3 rounded-full bg-[#2db039] mr-2"></span>Watching: 2</li>
                  <li><span className="inline-block w-3 h-3 rounded-full bg-[#2E51A2] mr-2"></span>Completed: 197</li>
                </ul>
                <ul className="space-y-1">
                  <li>Total Entries: 227</li>
                  <li>Episodes: 3,387</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}