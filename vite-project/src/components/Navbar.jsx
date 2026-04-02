import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  // Default state is "Guest"
  const { userName } = useContext(AuthContext);

  const displayUserName = userName || "Loading...";
  const userInitial = displayUserName.charAt(0).toUpperCase();

  return (
    <header className="w-full shadow-md">
      
      {/* Top Black Bar */}
      <div className="bg-black text-white h-14 flex items-center justify-between px-6">
        
        {/* Logo */}
        <Link
          to="/dashboard"
          className="text-2xl tracking-tight"
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800 }}
        >
          AniLibrary
        </Link>

        {/* Profile Section */}
        <Link
          to="/profile"
          className="flex items-center gap-3 text-white hover:opacity-80 transition"
        >
          <span className="text-sm font-medium">
            {displayUserName}
          </span>

          {/* Avatar Placeholder */}
          <div className="w-8 h-8 rounded-full bg-[#9c16c2] flex items-center justify-center text-white font-bold text-sm">
            {userInitial}
          </div>
        </Link>
      </div>

      {/* Purple Navigation Bar */}
      <nav className="bg-[#9c16c2] h-11 flex items-center px-6 text-white">
        <div className="flex gap-6 text-sm font-semibold">
          
          <Link
            to="/library"
            className="hover:opacity-80 transition"
          >
            Anime
          </Link>

          <Link
            to="/mylist"
            className="hover:opacity-80 transition"
          >
            My List
          </Link>

        </div>
      </nav>
    </header>
  );
}