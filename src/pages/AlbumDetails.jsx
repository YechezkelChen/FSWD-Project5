import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { getAlbumById, updateAlbum, deleteAlbum } from "../utils/Album";
import { getAlbumPhotosPaginated } from "../utils/Photos.js";
import { getUserByUsername } from "../utils/User";
import { getLoggedUser } from "../utils/loggedUsers";

import PhotoList from "../components/photos/PhotoList.jsx";

import "./styles/Album.css";
import PhotoForm from "../components/photos/PhotoForm.jsx";

export default function Album() {
  const { id } = useParams();

  const [user, setUser] = useState({ id: "1" });
  const [album, setAlbum] = useState({});
  const [photos, setPhotos] = useState([]);

  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");

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
      setTitle(albumResponse.data.title);

      const response = await getAlbumPhotosPaginated(id, page, 3);

      setPhotos(response.data.data);
      setNextPage(response.data.next);
      setPrevPage(response.data.prev);
    };

    fetchData();
  }, [id, page]);

  const handleDeleteAlbum = async () => {
    await deleteAlbum(id);
    window.location.href = "/albums";
  };

  const handleEditAlbum = async () => {
    setShowForm(prev => !prev);
  };

  const handleAddPhoto = async () => { };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const newAlbum = {
      id: id,
      title: title,
      userId: user.id,
    };

    const response = await updateAlbum(newAlbum);

    setAlbum(response.data);
    setShowForm(false);
  };

  return (
    <div className="main">
      <div className="page-header-g">
        {showForm ? (
          <form className="album-form" onSubmit={handleFormSubmit}>
            <input className="form-input" type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-blue btn-sm"
              >Save</button>
            </div>
          </form>
        ) : (
          <p>{album.title}</p>
        )}
        <div className="btn-group">
          <button onClick={handleEditAlbum} className="btn btn-blue btn-sm">
            {showForm ? "Cancel" : "Edit"}
          </button>
          <button onClick={handleDeleteAlbum} className="btn btn-red btn-sm">
            Delete
          </button>
          <button onClick={handleAddPhoto} className="btn btn-green btn-sm">
            Add Photo
          </button>
        </div>
      </div>
      <PhotoList
        photos={photos}
        userId={user.id}
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
