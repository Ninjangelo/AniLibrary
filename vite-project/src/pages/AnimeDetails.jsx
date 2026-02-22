import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { animeList } from "../data/animeData";

export default function AnimeDetails({ addToMyList }) {
  const { id } = useParams();
  const anime = animeList.find((a) => a.id === parseInt(id));

  if (!anime) return <p className="p-6">Anime not found</p>;

  return (
    <div className="bg-gradient-to-br from-[#FF6EC7] via-white to-[#7B5FFF] min-h-screen transition-all duration-500 ease-in-out">
      <Navbar />
      <div className="p-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <img
              src={`https://via.placeholder.com/250x350?text=${anime.title}`}
              alt={anime.title}
              className="rounded shadow"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">{anime.title}</h1>
              <p className="text-gray-500 mb-1">{anime.genre}</p>
              <p className="text-gray-400 mb-2">Episodes: {anime.episodes}</p>
              <p className="mt-2">{anime.description}</p>
            </div>
            <button
              onClick={() => addToMyList(anime)}
              className="mt-4 px-6 py-3 rounded font-semibold bg-gradient-to-r from-[#FF6EC7] to-[#7B5FFF] text-white hover:opacity-90 transition duration-300"
            >
              Add to My List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}