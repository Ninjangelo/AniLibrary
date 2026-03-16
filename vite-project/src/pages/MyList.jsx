import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MyList({ myAnimeList }) {
  const list = myAnimeList || [];

  return (
    <div className="min-h-screen bg-[#121212] pb-10">

      <Navbar />

      <div className="max-w-[1020px] mx-auto mt-6 bg-[#1e1e1e] shadow-md border border-[#2a2a2a] pb-8 rounded-md">
        
        {/* Purple Banner */}
        <div className="bg-[#9c16c2] text-white py-14 flex flex-col items-center justify-center rounded-t-md">
          <p className="text-[11px] font-bold mb-1 tracking-[0.15em] uppercase text-white/80">
            Organize, Track, Discover
          </p>

          <h1
            className="text-[44px] font-bold mb-3 tracking-tight"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            AniLibrary
          </h1>

          <p className="text-[11px] font-bold tracking-[0.2em] text-white/80">
            YOUR PERSONAL ANIME COLLECTION
          </p>
        </div>

        {/* Tabs (KEPT) */}
        <div className="flex justify-center border-b border-[#2a2a2a] text-[13px] font-bold text-gray-400 relative mt-2">
          <span className="px-5 py-3 text-[#9c16c2] border-b-[3px] border-[#9c16c2] cursor-pointer">
            All Anime
          </span>
          <span className="px-5 py-3 hover:text-white cursor-pointer transition">
            Currently Watching
          </span>
          <span className="px-5 py-3 hover:text-white cursor-pointer transition">
            Completed
          </span>
          <span className="px-5 py-3 hover:text-white cursor-pointer transition">
            On Hold
          </span>
          <span className="px-5 py-3 hover:text-white cursor-pointer transition">
            Dropped
          </span>
          <span className="px-5 py-3 hover:text-white cursor-pointer transition">
            Plan to Watch
          </span>
        </div>

        {/* List Section */}
        <div className="px-4 mt-6">
          
          {/* Section Header (Stats/Filters removed ✅) */}
          <div className="bg-[#9c16c2] text-white flex justify-between px-3 py-2 items-center rounded-t-md">
            <span className="font-bold text-sm tracking-wide uppercase">
              All Anime
            </span>
          </div>

          {/* Table */}
          {list.length === 0 ? (
            <div className="text-center text-gray-400 py-16 border border-t-0 border-[#2a2a2a] bg-[#1e1e1e] text-[13px]">
              No anime in your list yet. Go to the{" "}
              <Link to="/library" className="text-white font-bold underline">
                Library
              </Link>{" "}
              to add some!
            </div>
          ) : (
            <table className="w-full text-left text-[12px] text-gray-300 border border-t-0 border-[#2a2a2a] border-collapse bg-[#1e1e1e]">
              <thead>
                <tr className="bg-[#252525] border-b border-[#2a2a2a] text-white font-bold">
                  <th className="py-2 px-2 w-8 text-center">#</th>
                  <th className="py-2 px-2 w-16 text-center">Image</th>
                  <th className="py-2 px-2">Anime Title</th>
                  <th className="py-2 px-2 w-16 text-center">Score</th>
                  <th className="py-2 px-2 w-16 text-center">Type</th>
                  <th className="py-2 px-2 w-24 text-center">Progress</th>
                  <th className="py-2 px-4 w-20 text-center">Tags</th>
                </tr>
              </thead>
              <tbody>
                {list.map((anime, index) => (
                  <tr
                    key={anime.id}
                    className="border-b border-[#2a2a2a] hover:bg-[#252525] group transition"
                  >
                    <td className="text-center font-bold text-gray-400 border-l-[3px] border-l-[#9c16c2]">
                      {index + 1}
                    </td>

                    <td className="py-2 text-center flex justify-center">
                      <img
                        src={`https://via.placeholder.com/50x70?text=${anime.title[0]}`}
                        alt={anime.title}
                        className="w-12 h-16 object-cover border border-[#2a2a2a]"
                      />
                    </td>

                    <td className="py-2 px-2 align-top pt-3">
                      <Link
                        to={`/anime/${anime.id}`}
                        className="text-white font-bold text-[13px] hover:underline"
                      >
                        {anime.title}
                      </Link>
                    </td>

                    <td className="text-center font-bold text-gray-300">
                      {index === 0 ? "-" : 10 - index}
                    </td>

                    <td className="text-center text-gray-400">TV</td>

                    <td className="text-center text-gray-300 font-medium">
                      {anime.episodes} / {anime.episodes}
                    </td>

                    <td className="text-center px-4 text-[10px] text-[#9c16c2] cursor-pointer hover:underline">
                      Edit
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}