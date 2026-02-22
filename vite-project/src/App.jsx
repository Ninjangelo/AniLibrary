import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/library"
          element={<Library addToMyList={addToMyList} />}
        />
        <Route
          path="/mylist"
          element={<MyList myAnimeList={myAnimeList} />}
        />
        <Route path="/anime/:id" element={<AnimeDetails myAnimeList={myAnimeList} addToMyList={addToMyList} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
    </Router>
  );
}

export default App;