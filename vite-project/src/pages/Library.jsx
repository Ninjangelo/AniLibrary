import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function Library({ addToMyList }) {
  // State Variables
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data when Library page successfully loads
  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await fetch('http://localhost/anilibrary/api/get_anime.php', {
          method: 'GET',
          credentials: 'include'
        });
        
        const data = await response.json();
        
        if (data.status === 'success') {
          // Save the database rows into React state
          setAnimeList(data.data);
        } else {
          console.error("Failed to load anime:", data.message);
        }
      } catch (error) {
        console.error("Error fetching anime data:", error);
      } finally {
        // Stop loading state
        setLoading(false);
      }
    };

    fetchAnime();
  }, []);
  // Empty array ensures this only runs once
  
  console.log("Database Data:", animeList);
  return (
    <div className="min-h-screen bg-[#121212] pb-10">
      <Navbar />

      <div className="max-w-[1060px] mx-auto mt-4">

        {/* Header Area */}
        <div className="border-b border-[#2a2a2a] mb-2">
          <h1
            className="text-white text-xl font-bold pb-1"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Top Anime
          </h1>
        </div>

        {/* Sub Nav */}
        <div className="flex gap-4 text-xs font-bold text-gray-400 border-b border-[#2a2a2a] pb-2 mb-4">
          <span className="text-white bg-[#1e1e1e] border border-[#2a2a2a] px-2 py-1 rounded">
            All Anime
          </span>
          <span className="py-1 hover:text-white cursor-pointer">Top Airing</span>
          <span className="py-1 hover:text-white cursor-pointer">Top Upcoming</span>
          <span className="py-1 hover:text-white cursor-pointer">Top TV Series</span>
        </div>

        {/* Table Header */}
        <div className="bg-[#9c16c2] text-white flex justify-between p-2 px-3 font-bold text-xs items-center rounded-t">
          <span>Top Anime Series</span>
          <button className="bg-[#7c11a0] px-2 py-1 rounded hover:opacity-90 transition">
            Next 50 ›
          </button>
        </div>

        {/* Table Data */}
        <table className="w-full text-left border-x border-b border-[#2a2a2a] bg-[#1e1e1e]">
          <thead>
            <tr className="text-xs text-gray-400 bg-[#252525]">
              <th className="py-2 px-4 w-16 text-center">Rank</th>
              <th className="py-2 px-2">Title</th>
              <th className="py-2 px-2 w-24 text-center">Score</th>
              <th className="py-2 px-2 w-24 text-center">Your Score</th>
              <th className="py-2 px-2 w-32 text-center">Status</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-8 text-gray-400">
                  Loading anime from database...
                </td>
              </tr>
            ) : animeList.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center py-8 text-gray-400">
                  No anime found in the database.
                </td>
              </tr>
            ) : (
              animeList.map((anime, index) => (
                <tr
                  key={anime.id || index}
                  className="hover:bg-[#252525] border-b border-[#2a2a2a]"
                >
                  <td className="text-3xl font-bold text-gray-400 text-center py-4">
                    {index + 1}
                  </td>

                  <td className="py-2 px-2 flex gap-3 items-start">
                    <img
                      // SAFETY NET: If the database has a filename, look in the XAMPP folder. 
                      // If the database has NO filename (null), fallback to the placeholder!
                      src={
                        anime.image_filename 
                          ? `http://localhost/anilibrary/images/${anime.image_filename}` 
                          : `https://placehold.co/260x320/1e1e1e/FFFFFF/png?text=${anime.name ? String(anime.name).charAt(0) : '?'}`
                      }
                      alt={anime.name || "Unknown Anime"}
                      className="w-24 h-[125px] object-cover"
                    />

                    <div>
                      <a
                        href={`/anime/${anime.name || ''}`}
                        className="text-white font-bold text-sm hover:underline"
                      >
                        {/* SAFETY NET: Fallback text if title is missing */}
                        {anime.name || "Unknown Anime"}
                      </a>

                      <p className="text-gray-400 text-[11px] mt-1">
                        TV ({anime.eps || '?'} eps)
                      </p>

                      <p className="text-gray-400 text-[11px]">
                        {anime.tags || "Unknown Genre"}
                      </p>
                    </div>
                  </td>

                  <td className="text-center font-bold text-white text-sm">
                    ★ {anime.rating || "N/A"}
                  </td>

                  <td className="text-center text-xs text-gray-400">
                    N/A
                  </td>

                  <td className="text-center">
                    <button
                      onClick={() => addToMyList(anime)}
                      className="bg-[#9c16c2] hover:bg-[#7c11a0] text-white text-xs px-3 py-1 rounded transition"
                    >
                      Add to list
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

      </div>
    </div>
  );
}