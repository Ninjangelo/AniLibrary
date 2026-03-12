import React from "react";
import Navbar from "../components/Navbar";
import { animeList } from "../data/animeData";

export default function Library({ addToMyList }) {
  return (
    <div className="min-h-screen bg-[#121212] pb-10">
      <Navbar />
      <div className="max-w-[1060px] mx-auto mt-4">
        
        {/* Header Area */}
        <div className="border-b border-gray-600 mb-2">
          <h1 className="text-white text-xl font-bold pb-1">Top Anime</h1>
        </div>
        
        {/* Sub Nav */}
        <div className="flex gap-4 text-xs font-bold text-gray-400 border-b border-[#2a2a2a] pb-2 mb-4">
          <span className="text-white bg-[#1e1e1e] px-2 py-1 rounded">All Anime</span>
          <span className="py-1 hover:text-white cursor-pointer">Top Airing</span>
          <span className="py-1 hover:text-white cursor-pointer">Top Upcoming</span>
          <span className="py-1 hover:text-white cursor-pointer">Top TV Series</span>
        </div>

        {/* Table Header */}
        <div className="bg-[#2E51A2] text-white flex justify-between p-1 px-2 font-bold text-xs items-center rounded-t">
          <span>Top Anime Series</span>
          <button className="bg-[#4d6baf] px-2 py-1 rounded hover:bg-[#5c7bbd]">Next 50 ›</button>
        </div>

        {/* Table Data */}
        <table className="w-full text-left mal-table border-x border-[#2a2a2a] bg-[#1a1a1a]">
          <thead>
            <tr className="text-xs text-gray-400 bg-[#1e1e1e]">
              <th className="py-2 px-4 w-16 text-center">Rank</th>
              <th className="py-2 px-2">Title</th>
              <th className="py-2 px-2 w-24 text-center">Score</th>
              <th className="py-2 px-2 w-24 text-center">Your Score</th>
              <th className="py-2 px-2 w-32 text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {animeList.map((anime, index) => (
              <tr key={anime.id} className="hover:bg-[#222222]">
                <td className="text-3xl font-bold text-gray-400 text-center py-4">{index + 1}</td>
                <td className="py-2 px-2 flex gap-3 items-start">
                  <img src={`https://via.placeholder.com/50x70?text=${anime.title[0]}`} alt={anime.title} className="w-12 h-[70px] object-cover" />
                  <div>
                    <a href={`/anime/${anime.id}`} className="text-[#729bce] font-bold text-sm hover:underline">{anime.title}</a>
                    <p className="text-gray-400 text-[11px] mt-1">TV ({anime.episodes} eps)</p>
                    <p className="text-gray-400 text-[11px]">{anime.genre}</p>
                  </div>
                </td>
                <td className="text-center font-bold text-white text-sm">⭐ 9.{8 - index}</td>
                <td className="text-center text-xs">N/A</td>
                <td className="text-center">
                  <button 
                    onClick={() => addToMyList(anime)}
                    className="bg-[#3e5f99] hover:bg-[#4d6baf] text-white text-xs px-3 py-1 rounded w-full max-w-[90px]"
                  >
                    Add to list
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}