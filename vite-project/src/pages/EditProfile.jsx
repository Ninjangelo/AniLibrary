import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";

export default function EditProfile() {
  const {
    userName, setUserName,
    userAvatar, setUserAvatar,
    userBio, setUserBio,
    userEmail, setUserEmail
  } = useContext(AuthContext);
  
  // Form State
  const [usernameInput, setUsernameInput] = useState(userName || "");
  // blank on default
  const [emailInput, setEmailInput] = useState(userEmail || "");
  const [bioInput, setBioInput] = useState(userBio || "");
  
  // Image State
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(userAvatar || null);
  const [isUploading, setIsUploading] = useState(false);

  // Strictly enforces square aspect ratio for the image
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const img = new Image();
    const objectUrl = URL.createObjectURL(file);

    img.onload = () => {
      if (img.width !== img.height) {
        alert(`Error: Image must be a perfect square. Your image is ${img.width}x${img.height}.`);
        setSelectedFile(null);
        // Revert to current avatar if they pick a bad file
        setPreviewUrl(userAvatar || null); 
      } else {
        setSelectedFile(file);
        setPreviewUrl(objectUrl);
      }
    };
    img.src = objectUrl;
  };

  // submit everything all at once
  const handleUpload = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    
    // package text and files together securely
    const formData = new FormData();
    formData.append("username", usernameInput);
    formData.append("email", emailInput);
    formData.append("bio", bioInput);
    
    if (selectedFile) {
      formData.append("avatar", selectedFile);
    }

    try {
      const response = await fetch('http://localhost/anilibrary/api/update_profile.php', {
        method: 'POST',
        credentials: 'include',
        // enables sending mixed package to PHP
        body: formData
      });

      const data = await response.json();

      if (data.status === 'success') {
        alert("Profile updated successfully!");
        
        // updates react global memory for instant update of profile aspects
        if (data.new_username) setUserName(data.new_username);
        if (data.new_email) setUserEmail(data.new_email);
        if (data.avatar_url) setUserAvatar(data.avatar_url);
        if (data.new_bio !== undefined) setUserBio(data.new_bio);
        
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Update failed", error);
      alert("A network error occurred.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] pb-10">
      <Navbar />
      <div className="max-w-[1060px] mx-auto mt-4 text-sm">
        
        <div className="border-b border-[#2a2a2a] mb-4 pb-1">
          <h1 className="text-white text-xl font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Profile Settings
          </h1>
        </div>

        <div className="bg-[#1e1e1e] border border-[#2a2a2a] max-w-2xl p-6 rounded-sm">
          <form onSubmit={handleUpload} className="flex flex-col gap-5">
            
            {/* Username Field */}
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Username</label>
              <input
                type="text"
                value={usernameInput}
                onChange={(e) => setUsernameInput(e.target.value)}
                required
                className="w-full bg-[#121212] border border-[#333] text-white rounded-sm px-3 py-2 focus:outline-none focus:border-[#9c16c2] transition"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">Email</label>
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required
                placeholder="user@example.com"
                className="w-full bg-[#121212] border border-[#333] text-white rounded-sm px-3 py-2 focus:outline-none focus:border-[#9c16c2] transition"
              />
            </div>

            {/* Bio Field */}
            <div>
              <label className="block text-xs font-bold text-gray-400 mb-1">About Me</label>
              <textarea
                value={bioInput}
                onChange={(e) => setBioInput(e.target.value)}
                rows="3"
                placeholder="Write a little about yourself..."
                className="w-full bg-[#121212] border border-[#333] text-white rounded-sm px-3 py-2 focus:outline-none focus:border-[#9c16c2] transition resize-none"
              ></textarea>
            </div>

            {/* Avatar Field */}
            <div className="pt-2 border-t border-[#2a2a2a]">
              <label className="block text-xs font-bold text-gray-400 mb-2">Profile Picture</label>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#121212] border border-[#333] rounded overflow-hidden flex items-center justify-center text-gray-500 text-xs">
                  {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    "No Image"
                  )}
                </div>
                <input 
                  type="file" 
                  accept="image/png, image/jpeg" 
                  onChange={handleFileChange}
                  className="text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border-0 file:text-sm file:font-semibold file:bg-[#2a2a2a] file:text-white hover:file:bg-[#3a3a3a]"
                />
              </div>
            </div>

            {/* Submit Area */}
            <div className="pt-4 border-t border-[#2a2a2a] flex justify-between items-center mt-2">
              <Link to="/profile" className="text-[#9c16c2] text-xs hover:underline">
                ← Back to Profile
              </Link>
              <button 
                type="submit" 
                disabled={isUploading}
                className="bg-[#9c16c2] text-white font-bold py-2 px-6 rounded-sm hover:bg-[#7c11a0] transition-colors disabled:opacity-50"
              >
                {isUploading ? "Saving..." : "Save Changes"}
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}