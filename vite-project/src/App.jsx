import React, { useState } from "react";
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
  const [myAnimeList, setMyAnimeList] = useState([]);

  const addToMyList = (anime) => {
    if (!myAnimeList.find((a) => a.id === anime.id)) {
      setMyAnimeList([...myAnimeList, anime]);
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
              element={<ProtectedRoute><Library addToMyList={addToMyList} /></ProtectedRoute>}
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