import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // ----- Register Validation -----
    if (password.length < 8) {
      setErrorMsg("Your password must be at least 8 characters long.");
      return;
    }

    if (password !== passwordConfirmation) {
      setErrorMsg("Your password does not match. Please try again.");
      return;
    }

    try {
      const response = await fetch('http://localhost/anilibrary/api/register.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
            name: username, 
            email: email, 
            password: password
        }),
        credentials: 'include',
      });

      const data = await response.json();
      
      if (data.status === 'success') {
        navigate("/dashboard");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error("Error Caught:", error);
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="bg-[#121212] min-h-screen flex flex-col items-center pt-20">

      {/* Logo */}
      <h1
        className="text-white text-4xl font-bold mb-8 tracking-tight"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        AniLibrary
      </h1>

      <div className="bg-[#1e1e1e] border border-[#2a2a2a] w-full max-w-sm p-6 rounded-sm shadow-lg">

        <h2 className="text-white font-bold text-lg mb-4 border-b border-[#2a2a2a] pb-2">
          Sign Up
        </h2>

        {errorMsg && (
          <div className="bg-red-900/50 border border-red-500 text-red-200 text-xs p-2 rounded-sm mb-4">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">
              Username
            </label>
            <input
              className="w-full bg-[#121212] border border-[#333] text-white rounded-sm px-2 py-1.5 focus:outline-none focus:border-[#9c16c2] transition text-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">Email Address</label>
            <input
              type="email"
              required
              className="w-full bg-[#121212] border border-[#333] text-white rounded-sm px-2 py-1.5 focus:outline-none focus:border-[#9c16c2] transition text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full bg-[#121212] border border-[#333] text-white rounded-sm px-2 py-1.5 focus:outline-none focus:border-[#9c16c2] transition text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-400 mb-1">Confirm Password</label>
            <input
              type="password"
              required
              className="w-full bg-[#121212] border border-[#333] text-white rounded-sm px-2 py-1.5 focus:outline-none focus:border-[#9c16c2] transition text-sm"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>

          <button className="bg-[#9c16c2] text-white font-bold py-2 rounded-sm mt-2 hover:bg-[#7c11a0] text-sm transition-colors">
            Create Account
          </button>

          <p className="text-center text-xs text-gray-400 mt-2">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-[#9c16c2] hover:underline"
            >
              Log In
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}