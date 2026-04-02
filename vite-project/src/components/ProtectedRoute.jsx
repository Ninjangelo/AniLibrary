import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { userName, loading } = useContext(AuthContext);

  // If still checking who's logged in, display loading screen
  if (loading) {
    return <div className="min-h-screen bg-[#121212] flex justify-center items-center text-white">Loading...</div>;
  }

  // 2. Return to login page if not logged in
  if (!userName) {
    return <Navigate to="/" replace />;
  }

  // If account contains name, return them to the page
  return children;
}