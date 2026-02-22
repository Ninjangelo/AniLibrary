// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Temporary test login
    if (username === "testuser" && password === "password") {
      navigate("/dashboard");
    } else {
      alert("Invalid credentials! Try: testuser / password");
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#FF6EC7] via-white to-[#7B5FFF] min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-sm w-full p-8 bg-white rounded-xl shadow-lg"
      >
        <h1 className="text-3xl font-bold text-center text-[#7B5FFF] mb-4">AniLibrary Login</h1>

        <input
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="px-4 py-2 rounded font-semibold bg-gradient-to-r from-[#FF6EC7] to-[#7B5FFF] text-white hover:opacity-90 transition duration-300">
          Login
        </button>

        <p className="text-center text-gray-600 mt-2">
          No account? <Link to="/register" className="text-[#FF6EC7] font-semibold">Register</Link>
        </p>

        <p className="text-center text-gray-500 mt-2 text-sm">
          Temporary test login: <b>testuser / password</b>
        </p>
      </form>
    </div>
  );
}