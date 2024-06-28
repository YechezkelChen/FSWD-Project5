import { useEffect, useState } from "react";
import AlbumForm from "../components/albums/AlbumForm.jsx";
import AlbumList from "../components/albums/AlbumList.jsx";
import SearchAlbum from "../components/albums/SearchAlbum.jsx";

import "../components/styles/Button.css";
import "../components/styles/Form.css";
import "./styles/Albums.css";

import { getAlbums } from "../utils/Album.js";
import { getUserByUsername } from "../utils/User.js";
import { getLoggedUser } from "../utils/loggedUsers.js";

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const [filteredAlbums, setFilteredAlbums] = useState([]);

  const [userId, setUserId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      const loggedUser = getLoggedUser();

      if (!loggedUser) {
        // go to the login page
        window.location.href = "/login";
        return;
      }

      const users = await getUserByUsername(loggedUser.username);
      const userId = 1//users[0].id;
      setUserId(userId);

      const response = await getAlbums(userId);
      setAlbums(response.data);
      setFilteredAlbums(response.data);
    }

    fetchAlbums();
  }, []);

  return (
    <div className="main">
      <div className="header-section">
        <h1 className="albums-header">Albums</h1>
        <button className="btn btn-blue" onClick={() => setShowForm(!showForm)}>
          {showForm ? "Hide" : "Add Album"}
        </button>
      </div>
      {showForm && <AlbumForm setAlbums={setAlbums} userId={userId} />}
      <h2 className="subheader">Search for albums</h2>
      <SearchAlbum albums={albums} setAlbums={setFilteredAlbums} />
      <AlbumList
        userId={userId}
        albums={filteredAlbums}
        setAlbums={setAlbums}
        setFilteredAlbums={setFilteredAlbums}
      />
    </div>
  );
}
