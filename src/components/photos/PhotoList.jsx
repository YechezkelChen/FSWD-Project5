import React, { useState, useEffect } from 'react';
import PhotoItem from './PhotoItem.jsx';
import PhotoForm from './PhotoForm.jsx';

import { getPhotos } from '../../utils/Photos.js'

import '../../pages/styles/Albums.css';

export default function PhotoList({ album }) {
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [editMode, setEditMode] = useState(false);
  const [photo, setPhoto] = useState(null);

  async function fetchPhotos() {
    const response = await getPhotos(album.id, currentIndex, currentIndex + 10);
    setPhotos(prevPhotos => [...prevPhotos, ...response.data])
    setCurrentIndex(prevIndex => prevIndex + 10);
  }

  const handleEdit = (id) => {
    const photo = photos.find((photo) => photo.id === id);
    setEditMode(true);
    setPhoto(photo);
  }

  return (
    <div className="photo-list">
      <PhotoForm photo={photo} setPhotos={setPhotos} editMode={editMode} setEditMode={setEditMode} />
      <div className="header-btn">
        <button className="btn btn-blue" onClick={() => {
          const photo = photos.find((photo) => photo.id === id);
          setEditMode(!editMode)
          setPhoto(photo);
        }
        }>
          {editMode ? "View" : "Edit"}
        </button>
      </div>
      {photos.map(photo => (
        <PhotoItem key={photo.id} photo={photo} handleEdit={handleEdit} setPhotos={setPhotos} editMode={editMode} setEditMode={setEditMode} />
      ))}
      {currentIndex <= photos.length && (
        <button className="btn btn-blue" onClick={fetchPhotos}>Load More</button>
      )}
    </div>
  );
}
