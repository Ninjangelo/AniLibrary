import React from "react";
import { Link } from "react-router-dom";

export default function MyList({ myAnimeList }) {
  // We use myAnimeList to match your App.jsx, and add a fallback [] so it never crashes!
  const list = myAnimeList || [];

  return (
    <div className="min-h-screen bg-[#e5e5e5] font-sans pb-10">
      
      {/* Top minimal header specific to MAL lists */}
      <div className="bg-[#2E51A2] text-white h-12 flex items-center justify-between px-6 shadow-sm">
        <Link to="/dashboard" className="text-[22px] font-bold tracking-tighter cursor-pointer hover:underline">
          MyAnimeList
        </Link>
        <div className="text-[13px]">
          Viewing <strong className="font-bold">Your</strong> Anime List
        </div>
      </div>

      <div className="max-w-[1020px] mx-auto mt-6 bg-white shadow-sm border border-gray-200 pb-8">
        
        {/* Big Blue Banner */}
        <div className="bg-[#4065BA] text-white py-14 flex flex-col items-center justify-center">
          <p className="text-[11px] font-bold mb-1 tracking-[0.15em] uppercase text-[#c4d3eb]">Organize, Discuss, Discover</p>
          <h1 className="text-[44px] font-bold mb-3 tracking-tighter">MyAnimeList</h1>
          <p className="text-[11px] font-bold tracking-[0.2em] text-[#c4d3eb]">HOW MUCH ANIME HAVE YOU SEEN?</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center border-b-2 border-gray-100 text-[13px] font-bold text-[#636363] relative mt-2">
          <span className="px-5 py-3 text-[#2E51A2] border-b-[3px] border-[#2E51A2] cursor-pointer">All Anime</span>
          <span className="px-5 py-3 hover:text-black cursor-pointer transition">Currently Watching</span>
          <span className="px-5 py-3 hover:text-black cursor-pointer transition">Completed</span>
          <span className="px-5 py-3 hover:text-black cursor-pointer transition">On Hold</span>
          <span className="px-5 py-3 hover:text-black cursor-pointer transition">Dropped</span>
          <span className="px-5 py-3 hover:text-black cursor-pointer transition">Plan to Watch</span>
          
          <div className="absolute right-4 top-3 text-gray-500 cursor-pointer font-normal text-lg">
            ⚲
          </div>
        </div>

        {/* List Section */}
        <div className="px-4 mt-6">
          {/* Blue Header Bar */}
          <div className="bg-[#4065BA] text-white flex justify-between px-3 py-1.5 items-center rounded-t-[3px]">
            <span className="font-bold text-sm tracking-wide uppercase">All Anime</span>
            <div className="flex gap-4 text-xs font-normal">
              <span className="cursor-pointer hover:underline">📊 Stats</span>
              <span className="cursor-pointer hover:underline">▼ Filters</span>
            </div>
          </div>

          {/* Table */}
          {list.length === 0 ? (
            <div className="text-center text-gray-600 py-16 border-x border-b border-gray-200 bg-[#f8f8f8] text-[13px]">
              No anime in your list yet. Go to the <Link to="/library" className="text-[#2E51A2] hover:underline font-bold">Library</Link> to add some!
            </div>
          ) : (
            <table className="w-full text-left text-[12px] text-gray-700 border-x border-b border-gray-200 border-collapse">
              <thead>
                <tr className="bg-[#f8f8f8] border-b border-gray-200 text-[#323232] font-bold">
                  <th className="py-2 px-2 w-8 text-center">#</th>
                  <th className="py-2 px-2 w-16 text-center">Image</th>
                  <th className="py-2 px-2">Anime Title</th>
                  <th className="py-2 px-2 w-16 text-center">Score</th>
                  <th className="py-2 px-2 w-16 text-center">Type</th>
                  <th className="py-2 px-2 w-24 text-center">Progress</th>
                  <th className="py-2 px-4 w-20 text-center">Tags</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {list.map((anime, index) => (
                  <tr key={anime.id} className="border-b border-gray-200 hover:bg-[#f8f8f8] group">
                    {/* Status color bar on the left - simulating the green (watching) and blue (completed) from your screenshot */}
                    <td className={`text-center font-bold text-gray-500 border-l-[3px] ${index === 0 ? 'border-l-[#2db039]' : 'border-l-[#2E51A2]'}`}>
                      {index + 1}
                    </td>
                    <td className="py-2 text-center flex justify-center">
                      <img src={`https://via.placeholder.com/50x70?text=${anime.title[0]}`} alt={anime.title} className="w-12 h-16 object-cover border border-gray-300" />
                    </td>
                    <td className="py-2 px-2 align-top pt-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <Link to={`/anime/${anime.id}`} className="text-[#2E51A2] font-bold text-[13px] hover:underline">
                            {anime.title}
                          </Link>
                          <p className="text-[10px] text-gray-400 mt-0.5 cursor-pointer hover:text-gray-600">Add notes</p>
                        </div>
                        <div className="text-[10px] text-[#729bce] whitespace-nowrap opacity-100">
                          <span className="cursor-pointer hover:underline">Edit</span> - <span className="cursor-pointer hover:underline">More</span>
                        </div>
                      </div>
                    </td>
                    <td className="text-center font-bold text-gray-800">
                      {index === 0 ? '-' : (10 - index)}
                    </td>
                    <td className="text-center text-gray-600">TV</td>
                    <td className="text-center text-gray-800 font-medium">
                      {index === 0 ? '7' : anime.episodes} / {anime.episodes} 
                      <span className="text-[#2E51A2] cursor-pointer ml-1 text-sm font-bold opacity-80 hover:opacity-100">⊕</span>
                    </td>
                    <td className="text-center px-4 text-[10px] text-[#2db039] cursor-pointer hover:underline">
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