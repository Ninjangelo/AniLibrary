import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "testuser" && password === "password") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials! Try: testuser / password");
    }
  };

  return (
    <div className="bg-[#121212] min-h-screen flex flex-col items-center pt-20 font-sans">
      {/* Fake Logo */}
      <h1 className="text-white text-4xl font-bold mb-8 tracking-tighter">
        MyAnimeList<span className="text-[#729bce] text-sm ml-1">Clone</span>
      </h1>
      
      <div className="bg-[#1e1e1e] border border-[#2a2a2a] w-full max-w-sm p-6 rounded-sm shadow-lg">
        <h2 className="text-white font-bold text-lg mb-4 border-b border-[#2a2a2a] pb-2">Log In</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">Username</label>
            <input
              className="w-full bg-[#121212] border border-[#333] text-white rounded-sm px-2 py-1.5 focus:outline-none focus:border-[#2E51A2] text-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">Password</label>
            <input
              type="password"
              className="w-full bg-[#121212] border border-[#333] text-white rounded-sm px-2 py-1.5 focus:outline-none focus:border-[#2E51A2] text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button className="bg-[#2E51A2] text-white font-bold py-2 rounded-sm mt-2 hover:bg-[#3b63bf] text-sm transition-colors">
            Login
          </button>
          
          <p className="text-center text-xs text-gray-400 mt-2">
            No account? <Link to="/register" className="text-[#729bce] hover:underline">Sign Up</Link>
          </p>
          
          <p className="text-center text-xs text-gray-600 mt-2 border-t border-[#2a2a2a] pt-3">
            Temporary test login: <b className="text-gray-400">testuser / password</b>
          </p>
        </form>
      </div>
    </div>
  );
}