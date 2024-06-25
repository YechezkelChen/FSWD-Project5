import React from 'react';

import { deletePhoto } from "../../utils/Photos.js";

import '../../pages/styles/Albums.css';

export default function PhotoItem({ photo, handleEdit, setPhotos, editMode, setEditMode }) {
  const handleDelete = async (e) => {
    e.preventDefault();
    await deletePhoto(photo.id);
    setPhotos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  return (
    <div className="photo-item">
      <img src={photo.thumbnailUrl} alt={photo.title} className="photo-thumbnail" />
      {editMode ?
        <div className="photo-details">
          <span>{photo.title}</span>
          <button className="btn btn-green" onClick={(e) => {
            e.preventDefault();
            handleEdit(photo.id);
          }}>
            Edit
          </button>
          <button className="btn btn-red" onClick={handleDelete}>Delete</button>
        </div>
        :
        <></>
      }
    </div>
  );
}
