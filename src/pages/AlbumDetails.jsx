import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getAlbumById } from "../utils/Album";
import { getAlbumPhotos } from "../utils/Photos.js";
import { getUserByUsername } from "../utils/User";
import { getLoggedUser } from "../utils/loggedUsers";

import PhotoList from "../components/photos/PhotoList.jsx";

export default function Album() {
  const { id } = useParams();

  const [user, setUser] = useState({ id: "1" });
  const [album, setAlbum] = useState({});
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const loggedUser = getLoggedUser();

      if (!loggedUser) {
        // go to the login page
        window.location.href = "/login";
        return;
      }

      const users = await getUserByUsername(loggedUser.username);
      const user = users[0];
      setUser(user);

      const albumResponse = await getAlbumById(id);
      setAlbum(albumResponse.data);

      const response = await getAlbumPhotos(id);
      setPhotos(response.data);
    };

    fetchData();
  }, [id]);

  const handleDeletePhoto = async (photoId) => {
    console.log(photoId);
  };
  const handleEditPhoto = async (photoId, url) => {
    console.log(photoId, url);
  };

  return (
    <div>
      <h1>{album.title}</h1>
      <PhotoList
        photos={photos}
        userId={user.id}
        deletePhoto={handleDeletePhoto}
        updatePhoto={handleEditPhoto}
      />
    </div>
  );
}
