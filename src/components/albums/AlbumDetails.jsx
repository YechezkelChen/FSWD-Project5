import React, { useState, useEffect } from 'react';
import PhotoList from '../photos/PhotoList.jsx';

import '../../pages/styles/Albums.css';

export default function AlbumDetails({ album }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Fetch photos for the selected album
    fetch(`/api/albums/${album.id}/photos`)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error('Error fetching photos:', error));
  }, [album]);

  return (
    <div className="album-details">
      <h2>{album.title}</h2>
      <PhotoList photos={photos} albumId={album.id} />
    </div>
  );
}
