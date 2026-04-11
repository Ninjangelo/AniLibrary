import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// ----- PAGES -----
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Library from "./pages/Library";
import MyList from "./pages/MyList";
import AnimeDetails from "./pages/AnimeDetails";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";

function App() {
  // Array to save anime IDs
  const [myAnimeList, setMyAnimeList] = useState([]);

  useEffect(() => {
    const loadSavedIds = async () => {
      try {
        const res = await fetch('http://localhost/anilibrary/api/get_my_list.php', { credentials: 'include' });
        const data = await res.json();
        if (data.status === 'success') {
          // Extract only the IDs into our state array
          setMyAnimeList(data.data.map(item => item.id));
        }
      } catch (e) { console.error(e); }
    };
    loadSavedIds();
  }, []);

  const addToMyList = async (anime) => {
    try {
      const response = await fetch('http://localhost/anilibrary/api/Notes.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ anime_id: anime.id }) 
      });

      const data = await response.json();

      if (data.status === 'added') {
        // add ID to state array
        setMyAnimeList([...myAnimeList, anime.id]);
      } else if (data.status === 'removed') {
        // Remove ID from state array
        setMyAnimeList(myAnimeList.filter(id => id !== anime.id));
      }
    } catch (error) {
      alert("Network error.");
    }
  };

  return (
    <AuthProvider>
      <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route
              path="/library"
              element={<ProtectedRoute><Library addToMyList={addToMyList} myAnimeList={myAnimeList} /></ProtectedRoute>}
            />
            <Route
              path="/mylist"
              element={<ProtectedRoute><MyList myAnimeList={myAnimeList} /></ProtectedRoute>}
            />
            <Route path="/anime/:id" element={<ProtectedRoute><AnimeDetails myAnimeList={myAnimeList} addToMyList={addToMyList} /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/edit-profile" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
          </Routes>
        </Router>
    </AuthProvider>
  );
}

export default App;