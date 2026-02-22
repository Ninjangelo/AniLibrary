import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="text-2xl font-bold">AniLibrary</div>
      <div className="flex gap-4">
        <Link to="/dashboard" className="btn btn-secondary">Dashboard</Link>
        <Link to="/library" className="btn btn-secondary">Library</Link>
        <Link to="/mylist" className="btn btn-secondary">My List</Link>
        <Link to="/profile" className="btn btn-secondary">Profile</Link>
      </div>
    </nav>
  );
}