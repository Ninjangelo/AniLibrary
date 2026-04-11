import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AnimeDetails({ addToMyList, myAnimeList = [] }) {
  // Get ID from URL
  const { id } = useParams();

  // Cleans anime name from URLs (e.g. Death%20Note becomes Death Note)  
  const animeName = decodeURIComponent(id);

  // State Variables
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [animeRank, setAnimeRank] = useState("--");

  useEffect(() => {
    const fetchAnimeDetails = async () => {
      try {
        const response = await fetch('http://localhost/anilibrary/api/get_anime.php', {
          method: 'GET',
          credentials: 'include'
        });
        
        const data = await response.json();
        
        if (data.status === 'success') {
          // Find anime in sorted array
          const animeIndex = data.data.findIndex((a) => a.name === animeName);
          
          if (animeIndex !== -1) {
            setAnime(data.data[animeIndex]); // Save the anime data
            setAnimeRank(animeIndex + 1);    // Save the rank! (Index starts at 0, so we add 1)
          }
        } else {
          console.error("Failed to load anime details");
        }
      } catch (error) {
        console.error("Error fetching anime data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeDetails();
  }, [animeName]);

  // Handle Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex items-center justify-center">
        Loading anime details...
      </div>
    );
  }

  // Handle Not Found State
  if (!anime) {
    return (
      <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-2">Anime Not Found</h2>
        <p className="text-gray-400">We couldn't find "{animeName}" in the database.</p>
      </div>
    );
  }

  const isSaved = anime ? myAnimeList.includes(anime.id) : false;

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
            {anime.name}
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-8">

          {/* Left Column */}
          <div className="w-full md:w-[260px]">

            <div className="bg-[#1e1e1e] border border-[#2a2a2a] rounded-md p-4">              
              <div className="w-full h-[320px] bg-[#2a2a2a] flex items-center justify-center text-gray-500 mb-4 overflow-hidden">
                <img
                  src={
                    anime.image_filename 
                      ? `http://localhost/anilibrary/images/${anime.image_filename}` 
                      : `https://placehold.co/260x320/1e1e1e/FFFFFF/png?text=${anime.name ? String(anime.name).charAt(0) : '?'}`
                  }
                  alt={anime.name || "Unknown Anime"}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Add Button */}
              <button
                onClick={() => addToMyList(anime)}
                className={`w-full py-2 rounded-md font-semibold transition ${
                  isSaved 
                    ? "bg-gray-600 hover:bg-gray-700 text-white" 
                    : "bg-[#9c16c2] hover:bg-[#7c11a0] text-white"
                }`}
              >
                {isSaved ? "✓ In Your List" : "Add to My List"}
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
                    {anime.eps || "?"}
                  </li>
                  <li>
                    <span className="text-white font-semibold">Status:</span>{" "}
                    {anime.status}
                  </li>
                  <li>
                    <span className="text-white font-semibold">Genres:</span>{" "}
                    {anime.tags}
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
                  <p className="text-3xl font-bold text-white">{anime.rating || "N/A"}</p>
                  <p className="text-xs text-gray-500">
                    {anime.rated_by}
                  </p>
                </div>

                <div className="flex gap-8 text-sm text-gray-400">
                  <div>
                    Ranked <span className="text-white font-semibold">{"#" + animeRank}</span>
                  </div>
                  <div>
                    Popularity <span className="text-white font-semibold">N/A</span>
                  </div>
                  <div>
                    Members{" "}
                    <span className="text-white font-semibold">
                      N/A
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
                {anime.synopsis}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}