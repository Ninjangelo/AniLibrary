import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [userAvatar, setUserAvatar] = useState(null);
  const [userBio, setUserBio] = useState("The shape of your voice");
  // Facilitates UI
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        // Changed to relative cloud path!
        const response = await fetch('/api/check_session.php', {
          method: 'GET',
          credentials: 'include'
        });
        const data = await response.json();

        if (data.status === 'success') {
            setUserName(data.user_name);
        } else {
            // Ensure a user is logged out
            setUserName(null);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        setUserName(null);
      } finally {
        // Frontend app safe to render
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  // THE BLOCKADE: Do not render the app until the server responds
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20vh' }}>
        <h2>Loading your library...</h2>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ userName, setUserName, loading, userAvatar, setUserAvatar, userBio, setUserBio, userEmail, setUserEmail }}>
      {children}
    </AuthContext.Provider>
  );
};