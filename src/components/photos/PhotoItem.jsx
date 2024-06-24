import React from 'react';

import '../../pages/styles/Albums.css';

export default function PhotoItem({ photo, updatePhoto, deletePhoto }) {
  const handleDelete = () => {
    deletePhoto(photo.id);
  };

  const handleUpdate = () => {
    // Logic to handle update
  };

  return (
    <div className="photo-item">
      <img src={photo.thumbnailUrl} alt={photo.title} className="photo-thumbnail" />
      <div className="photo-details">
        <span>{photo.title}</span>
        <button className="btn btn-green" onClick={handleUpdate}>Update</button>
        <button className="btn btn-red" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
