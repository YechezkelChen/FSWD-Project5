import React, { useState } from 'react';
import PhotoItem from './PhotoItem.jsx';
import PhotoForm from './PhotoForm.jsx';

import '../../pages/styles/Albums.css';

export default function PhotoList({ photos, albumId }) {
  const [displayPhotos, setDisplayPhotos] = useState(photos.slice(0, 10)); // Initial load
  const [currentIndex, setCurrentIndex] = useState(10);

  const loadMorePhotos = () => {
    const newPhotos = photos.slice(currentIndex, currentIndex + 10);
    setDisplayPhotos([...displayPhotos, ...newPhotos]);
    setCurrentIndex(currentIndex + 10);
  };

  const addPhoto = (photo) => {
    // Logic to add photo
  };

  const updatePhoto = (photoId, updatedPhoto) => {
    // Logic to update photo
  };

  const deletePhoto = (photoId) => {
    // Logic to delete photo
  };

  return (
    <div className="photo-list">
      {displayPhotos.map(photo => (
        <PhotoItem key={photo.id} photo={photo} updatePhoto={updatePhoto} deletePhoto={deletePhoto} />
      ))}
      {currentIndex < photos.length && (
        <button className="btn btn-blue" onClick={loadMorePhotos}>Load More</button>
      )}
      <PhotoForm albumId={albumId} addPhoto={addPhoto} />
    </div>
  );
}
