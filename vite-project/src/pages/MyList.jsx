import React from "react";
import Navbar from "../components/Navbar";

export default function MyList({ myList }) {
  return (
    <div className="bg-gradient-to-br from-[#FF6EC7] via-white to-[#7B5FFF] min-h-screen transition-all duration-500 ease-in-out">
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#7B5FFF] mb-6 text-center">My Anime List</h1>
        {myList.length === 0 ? (
          <p className="text-center text-gray-700">No anime added yet!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {myList.map((anime) => (
              <div
                key={anime.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
              >
                <h2 className="text-xl font-bold mb-1">{anime.title}</h2>
                <p className="text-gray-500 mb-1">{anime.genre}</p>
                <p className="text-gray-400 mb-2">Episodes: {anime.episodes}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}