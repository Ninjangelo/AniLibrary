import React from "react";
import { Link } from "react-router-dom";

export default function AnimeCard({ anime, addToMyList }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-1">{anime.title}</h2>
        <p className="text-gray-500 mb-1">{anime.genre}</p>
        <p className="text-gray-400 mb-2">Episodes: {anime.episodes}</p>
      </div>
      <div className="flex gap-2 mt-2">
        <Link
          to={`/anime/${anime.id}`}
          className="flex-1 text-center px-4 py-2 rounded font-semibold bg-gradient-to-r from-[#FF6EC7] to-[#7B5FFF] text-white hover:opacity-90 transition duration-300"
        >
          View
        </Link>
        <button
          onClick={() => addToMyList(anime)}
          className="flex-1 text-center px-4 py-2 rounded font-semibold bg-white border border-[#7B5FFF] text-[#7B5FFF] hover:bg-[#7B5FFF] hover:text-white transition duration-300"
        >
          Add
        </button>
      </div>
    </div>
  );
}