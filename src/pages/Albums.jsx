import { useEffect, useState } from "react";
import AlbumForm from "../components/albums/AlbumForm.jsx";
import AlbumList from "../components/albums/AlbumList.jsx";

import { getAlbums } from "../utils/Album";
import { getUserByUsername } from "../utils/User";
import { getLoggedUser } from "../utils/loggedUsers";

import "./styles/Albums.css";

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    async function fetchAlbums() {
      const loggedUser = getLoggedUser();

      if (!loggedUser) {
        // go to the login page
        window.location.href = "/login";
        return;
      }

      const users = await getUserByUsername(loggedUser.username);
      const userId = users[0].id;
      setUserId(userId);

      const response = await getAlbums(userId);
      setAlbums(response.data);
    }

    fetchAlbums();
  }, []);

  return (
    <div className="albums-container">
      <h1 className="albums-header">Albums</h1>
      <AlbumForm userId={userId} setAlbums={setAlbums} />
      <AlbumList
        albums={albums}
        selectedAlbum={selectedAlbum}
        setSelectedAlbum={setSelectedAlbum}
      />
    </div>
  );
}
