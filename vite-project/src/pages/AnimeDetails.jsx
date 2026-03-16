import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { animeList } from "../data/animeData";

export default function AnimeDetails({ addToMyList }) {
  const { id } = useParams();
  const anime = animeList.find((a) => a.id === parseInt(id));

  if (!anime) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">
        Anime not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#121212] pb-12">
      <Navbar />

      <div className="max-w-6xl mx-auto mt-8 px-4">

        {/* Title */}
        <div className="mb-6">
          <h1
            className="text-3xl text-white"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800 }}
          >
            {anime.title}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">

          {/* Left Column */}
          <div className="w-full md:w-[260px]">

            <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-md p-4">
              
              {/* Image Placeholder */}
              <div className="w-full h-[320px] bg-[#2a2a2a] flex items-center justify-center text-gray-500 mb-4">
                IMG
              </div>

              {/* Add Button */}
              <button
                onClick={() => addToMyList(anime)}
                className="w-full bg-[#9c16c2] hover:bg-[#7c11a0] text-white py-2 rounded-md font-semibold transition"
              >
                Add to My List
              </button>

              {/* Info */}
              <div className="mt-6">
                <h2 className="text-white font-bold mb-3 text-sm uppercase tracking-wide">
                  Information
                </h2>

                <ul className="text-sm text-gray-400 space-y-2">
                  <li>
                    <span className="text-white font-semibold">Type:</span> TV
                  </li>
                  <li>
                    <span className="text-white font-semibold">Episodes:</span>{" "}
                    {anime.episodes}
                  </li>
                  <li>
                    <span className="text-white font-semibold">Status:</span>{" "}
                    Finished Airing
                  </li>
                  <li>
                    <span className="text-white font-semibold">Genres:</span>{" "}
                    {anime.genre}
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1">

            {/* Stats Card */}
            <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-md p-6 mb-6">

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

                <div>
                  <p className="text-xs uppercase text-gray-400 mb-1">
                    Score
                  </p>
                  <p className="text-3xl font-bold text-white">8.50</p>
                  <p className="text-xs text-gray-500">
                    123,456 users
                  </p>
                </div>

                <div className="flex gap-8 text-sm text-gray-400">
                  <div>
                    Ranked <span className="text-white font-semibold">#15</span>
                  </div>
                  <div>
                    Popularity <span className="text-white font-semibold">#5</span>
                  </div>
                  <div>
                    Members{" "}
                    <span className="text-white font-semibold">
                      1,500,000
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Synopsis */}
            <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-md p-6">
              <h2 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">
                Synopsis
              </h2>

              <p className="text-gray-300 leading-relaxed text-sm">
                {anime.description}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}