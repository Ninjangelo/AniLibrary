import React from "react";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#121212] pb-10">
      <Navbar />

      <div className="max-w-[1060px] mx-auto mt-4 text-sm">

        {/* Ad Banner Placeholder */}
        <div className="w-full h-32 bg-[#1e1e1e] border border-[#2a2a2a] flex items-center justify-center mb-4 text-gray-500 rounded">
          [ Ad Banner Placeholder ]
        </div>

        {/* Panel Header */}
        <div className="bg-[#1e1e1e] border-t-2 border-[#9c16c2] p-2 flex justify-between items-center mb-4 text-white font-bold">
          <span>My Panel</span>
          <span className="text-xs text-gray-400 font-normal cursor-pointer hover:text-white">
            ⚙ Panel Settings
          </span>
        </div>

        <div className="flex gap-4">

          {/* Left Column */}
          <div className="w-[65%] flex flex-col gap-6">

            <div>
              <div className="flex justify-between border-b border-[#2a2a2a] pb-1 mb-2">
                <span className="text-white font-bold">
                  AniLibrary Highlights
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-[#1e1e1e] border border-[#2a2a2a] h-28 text-center flex items-center justify-center p-2 rounded">
                  Promo 1
                </div>
                <div className="bg-[#1e1e1e] border border-[#2a2a2a] h-28 text-center flex items-center justify-center p-2 rounded">
                  Promo 2
                </div>
                <div className="bg-[#1e1e1e] border border-[#2a2a2a] h-28 text-center flex items-center justify-center p-2 rounded">
                  Promo 3
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between border-b border-[#2a2a2a] pb-1 mb-2">
                <span className="text-white font-bold">
                  AniLibrary Announcements
                </span>
                <span className="text-xs text-[#9c16c2] cursor-pointer hover:underline">
                  View More
                </span>
              </div>

              <div className="mb-3">
                <p className="font-bold text-[#9c16c2]">
                  Tamon's B-side ✧ Profile Badge Event
                </p>
                <p className="text-xs text-gray-400">
                  Collect anime screenshots and participate in community events...
                  <span className="text-[#9c16c2] hover:underline cursor-pointer">
                    {" "}read more
                  </span>
                </p>
                <p className="text-[11px] text-gray-500 mt-1">
                  Posted Feb 9, 12:00 AM
                </p>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="w-[35%] flex flex-col gap-6">

            <div>
              <div className="flex justify-between border-b border-[#2a2a2a] pb-1 mb-2">
                <span className="text-white font-bold">My Statistics</span>
              </div>

              <table className="w-full text-xs">
                <tbody>
                  <tr>
                    <td className="py-1 text-gray-400">Anime Entries</td>
                    <td className="text-white">227</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray-400">Manga Entries</td>
                    <td className="text-white">0</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray-400">List Views</td>
                    <td className="text-white">120</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <div className="flex justify-between border-b border-[#2a2a2a] pb-1 mb-2">
                <span className="text-white font-bold">Recent Friend Updates</span>
              </div>

              <div className="flex gap-2 mb-2">
                <img
                  src="https://via.placeholder.com/40x60"
                  alt="Anime"
                  className="border border-[#2a2a2a]"
                />
                <div className="text-xs">
                  <p className="text-[#9c16c2] font-bold">
                    One Piece Fan Letter
                  </p>
                  <p className="text-gray-400">
                    Completed 1/1 · Scored 10
                  </p>
                  <p className="text-gray-500 mt-1 text-[10px]">
                    Oct 21, 2024
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}