import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import PhotoForm from "../photos/PhotoForm.jsx";
import PhotoList from "../photos/PhotoList.jsx";

import "../styles/Albums.css";
import "../styles/Button.css";

import { deleteAlbum } from "../../utils/Album.js";
import {
  addPhoto,
  getAlbumPhotos,
  updatePhoto,
  deletePhoto,
} from "../../utils/Photos.js";

export default function AlbumItem({ userId, album, setAlbums, setFilteredAlbums, albums }) {
  const [showPhotos, setShowPhotos] = useState(false);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await getAlbumPhotos(album.id);
      setPhotos(response.data);
    };

    fetchPhotos();
  }, [album.id]);

  const toggleContent = async () => {
    setShowPhotos(!showPhotos);
    if (!showPhotos) {
      const response = await getAlbumPhotos(album.id);
      setPhotos(response.data);
    }
  };

  const handleAddPhoto = async (photo) => {
    const response = await addPhoto(album.id, photo);
    setPhotos([...photos, response.data]);
  };

  const handleDeletePhoto = async (photoId) => {
    await deletePhoto(photoId);
    setPhotos(photos.filter((photo) => photo.id !== photoId));
  };

  const handleUpdatePhoto = async (photoId, updatedPhoto) => {
    const response = await updatePhoto(photoId, updatedPhoto);
    setPhotos(
      photos.map((photo) =>
        photo.id === photoId ? response.data : photo
      )
    );
  };

  const handleDeleteAlbum = async () => {
    await deleteAlbum(album.id);
    setFilteredAlbums(albums.filter((album_) => album_.id !== album.id));
    setAlbums(albums.filter((album_) => album_.id !== album.id));
  };

  return (
    <div className="album-item">
      {userId == album.userId && <span className="album-user">You</span>}
      <div className="album-body-c">
        <p>
          <Link className="album-id" to={`/albums/${album.id}`}>
            {album.id}
          </Link>
          . {album.title}
        </p>
        <div className="btn-group">
          {userId == album.userId && (
            <button className="btn btn-red btn-sm" onClick={handleDeleteAlbum}>
              Delete
            </button>
          )}
          <button className="btn btn-blue btn-sm" onClick={toggleContent}>
            {showPhotos ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      {showPhotos && (
        <>
          <PhotoList
            photos={photos}
            userId={userId}
            deletePhoto={handleDeletePhoto}
            updatePhoto={handleUpdatePhoto}
          />
          <PhotoForm
            userId={userId}
            albumId={album.id}
            addPhoto={handleAddPhoto}
          />
        </>
      )}
    </div>
  );
}

AlbumItem.propTypes = {
  userId: PropTypes.string,
  album: PropTypes.object.isRequired,
  setAlbums: PropTypes.func.isRequired,
  setFilteredAlbums: PropTypes.func.isRequired,
  albums: PropTypes.array.isRequired,
};
