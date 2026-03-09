import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { animeList } from "../data/animeData";

export default function AnimeDetails({ addToMyList }) {
  const { id } = useParams();
  const anime = animeList.find((a) => a.id === parseInt(id));

  if (!anime) return <div className="text-white bg-[#121212] min-h-screen p-6">Anime not found</div>;

  return (
    <div className="min-h-screen bg-[#121212] pb-10">
      <Navbar />
      <div className="max-w-[1060px] mx-auto mt-4 text-sm">
        
        {/* Title Header */}
        <div className="border-b border-gray-600 mb-4 pb-1">
          <h1 className="text-white text-xl font-bold">{anime.title}</h1>
        </div>
        
        <div className="flex gap-4">
          {/* Left Sidebar (Image & Info) */}
          <div className="w-[225px] flex-shrink-0">
            <img 
              src={`https://via.placeholder.com/225x318?text=${anime.title}`} 
              alt={anime.title} 
              className="w-full border border-gray-700 mb-2 object-cover"
            />
            
            <button 
              onClick={() => addToMyList(anime)}
              className="w-full bg-[#2E51A2] hover:bg-[#3b63bf] text-white py-1.5 rounded text-xs font-bold mb-4 shadow-sm"
            >
              Add to My List
            </button>

            <h2 className="text-white font-bold border-b border-[#2a2a2a] pb-1 mb-2">Information</h2>
            <ul className="text-xs space-y-1 text-gray-400">
              <li><span className="text-white font-bold">Type:</span> TV</li>
              <li><span className="text-white font-bold">Episodes:</span> {anime.episodes}</li>
              <li><span className="text-white font-bold">Status:</span> Finished Airing</li>
              <li><span className="text-white font-bold">Genres:</span> <span className="text-[#729bce] cursor-pointer hover:underline">{anime.genre}</span></li>
            </ul>
          </div>

          {/* Right Content (Stats & Synopsis) */}
          <div className="flex-1">
            {/* Score / Rank Header */}
            <div className="bg-[#1e1e1e] border border-[#2a2a2a] flex items-center p-3 mb-4 rounded">
              <div className="text-center px-4 border-r border-[#2a2a2a]">
                <div className="bg-[#2E51A2] text-white text-[10px] font-bold px-2 py-0.5 rounded mb-1 uppercase tracking-wider">Score</div>
                <div className="text-white text-2xl font-bold">8.50</div>
                <div className="text-[10px] text-gray-500">123,456 users</div>
              </div>
              <div className="flex gap-6 px-6 text-xs text-gray-400">
                <div>Ranked <strong className="text-white text-sm">#15</strong></div>
                <div>Popularity <strong className="text-white text-sm">#5</strong></div>
                <div>Members <strong className="text-white text-sm">1,500,000</strong></div>
              </div>
            </div>

            <h2 className="text-white font-bold border-b border-[#2a2a2a] pb-1 mb-2">Synopsis</h2>
            <p className="text-xs text-gray-300 leading-relaxed mb-4">
              {anime.description}
              <br/><br/>
              [Written by MAL Rewrite]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}