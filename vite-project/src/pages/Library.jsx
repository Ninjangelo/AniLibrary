import React from "react";
import Navbar from "../components/Navbar";
import AnimeCard from "../components/AnimeCard";
import { animeList } from "../data/animeData";

export default function Library({ addToMyList }) {
  return (
    <div className="bg-gradient-to-br from-[#FF6EC7] via-white to-[#7B5FFF] min-h-screen transition-all duration-500 ease-in-out">
      <Navbar />
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#7B5FFF] mb-6 text-center">Anime Library</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {animeList.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} addToMyList={addToMyList} />
          ))}
        </div>
      </div>
    </div>
  );
}