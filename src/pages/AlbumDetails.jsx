import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getAlbumById } from "../utils/Album";
import { getAlbumPhotosPaginated } from "../utils/Photos.js";
import { getUserByUsername } from "../utils/User";
import { getLoggedUser } from "../utils/loggedUsers";

import PhotoList from "../components/photos/PhotoList.jsx";

import "./styles/Album.css";

export default function Album() {
  const { id } = useParams();

  const [user, setUser] = useState({ id: "1" });
  const [album, setAlbum] = useState({});
  const [photos, setPhotos] = useState([]);

  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState(null);
  const [prevPage, setPrevPage] = useState(null);

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

      const response = await getAlbumPhotosPaginated(id, page, 4);

      setPhotos(response.data.data);
      setNextPage(response.data.next);
      setPrevPage(response.data.prev);
    };

    fetchData();
  }, [id, page]);

  const handleDeletePhoto = async (photoId) => {
    console.log(photoId);
  };
  const handleEditPhoto = async (photoId, url) => {
    console.log(photoId, url);
  };

  return (
    <div className="album">
      <h1>{album.title}</h1>
      <PhotoList
        photos={photos}
        userId={user.id}
        deletePhoto={handleDeletePhoto}
        updatePhoto={handleEditPhoto}
      />
      <div className="pagination btn-group">
        {prevPage && (
          <button
            className="btn btn-blue btn-sm"
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>
        )}
        <span className="btn btn-sm btn-inactive">{page}</span>
        {nextPage && (
          <button
            className="btn btn-blue btn-sm"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
