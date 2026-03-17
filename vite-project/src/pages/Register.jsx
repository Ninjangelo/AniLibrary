import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const getCookie = (name) => {
  const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
  return match ? decodeURIComponent(match[3]) : null;
}

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

    try {
      console.log("Checkpoint 1: Requesting cookie...");
      await fetch('http://localhost:8000/sanctum/csrf-cookie', {
        method: 'GET',
        headers: { 'Accept': 'application/json' },
        credentials: 'include', 
      });

      console.log("Checkpoint 2: Cookie requested. Grabbing token...");
      const csrfToken = getCookie('XSRF-TOKEN');
      console.log("The token is:", csrfToken);

      console.log("Checkpoint 3: Sending registration data...");
      const response = await fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-XSRF-TOKEN': csrfToken, 
        },
        credentials: 'include',
        body: JSON.stringify({
          name: username,
          email: email,
          password: password,
          password_confirmation: passwordConfirmation
        })
      });

      console.log("Checkpoint 4: Laravel responded! Status:", response.status);

      if (!response.ok || response.status === 204) {
        console.log("Account created successfully!");
        navigate("/dashboard");
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed. Please check your inputs.");
      }

      const errorData = await response.json();
      throw new Error(errorData.message || "Registration failed. Please check inputs.");

    } catch (error) {
      console.error("CRASH DETECTED:", error);
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