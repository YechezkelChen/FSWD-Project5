import React, { useState, useEffect } from 'react';
import PhotoItem from './PhotoItem.jsx';
import PhotoForm from './PhotoForm.jsx';

import { getPhotos } from '../../utils/Photos.js'

import '../../pages/styles/Albums.css';

export default function PhotoList({ album }) {
  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  async function fetchPhotos() {
    const response = await getPhotos(album.id, currentIndex, currentIndex + 10);
    setPhotos(prevPhotos => [...prevPhotos, ...response.data])
    setCurrentIndex(currentIndex + 10);
  }

  useEffect(() => {
    fetchPhotos();
  }, [album]);

  return (
    <div className="photo-list">
      {photos.map(photo => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
      {currentIndex < photos.length && (
        <button className="btn btn-blue" onClick={fetchPhotos}>Load More</button>
      )}
      <PhotoForm albumId={album.id} />
    </div>
  );
}
