import { useState, useEffect } from 'react';
import AlbumList from '../components/albums/AlbumList.jsx';
import AlbumForm from '../components/albums/AlbumForm.jsx';

import { getUserByUsername } from "../utils/User";
import { getLoggedUser } from "../utils/loggedUsers";
import { getAlbums } from "../utils/Album";

import './styles/Albums.css';

export default function Albums() {
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  const loggedUser = getLoggedUser();
  const user = getUserByUsername(loggedUser.username);
  const userId = user.id;
  // const userId = 1;

  useEffect(() => {
    async function fetchAlbums() {
      const response = await getAlbums(userId);
      setAlbums(response.data);
    }

    fetchAlbums();
  }, [userId]);

  return (
    <div className="albums-container">
      <h1 className="albums-header">Albums</h1>
      <AlbumForm userId={userId} setAlbums={setAlbums} />
      <AlbumList albums={albums} selectedAlbum={selectedAlbum} setSelectedAlbum={setSelectedAlbum} />
    </div>
  );
}
