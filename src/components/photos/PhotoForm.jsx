import React, { useState } from 'react';

import { createPhoto, updatePhoto } from "../../utils/Photos.js";

import '../../pages/styles/Albums.css';
// setTodos, editMode, setEditMode, todo 
export default function PhotoForm({ photo, setPhotos, editMode, setEditMode }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [error, setError] = useState('');

  if (editMode) {
    // check if the photo is not null
    // if it is not null, set the value of the input to the photo title
    // if (!photo) return;
    
    document.getElementsByClassName("form-input-title").value = photo.title;
    document.getElementsByClassName("form-input-url").value = photo.url;
    document.getElementsByClassName("form-input-thumbnail-url").value = photo.thumbnailUrl;
  }

  const handleAddPhoto = async (e) => {
    e.preventDefault();

    if (!title || !url || !thumbnailUrl) {
      setError('All fields are required');
      return;
    }

    const newPhoto = { albumId: photo.albumId, title, url, thumbnailUrl };
    const response = await createPhoto(newPhoto);
    setPhotos((prev) => [...prev, response.data]);

    setTitle('');
    setUrl('');
    setThumbnailUrl('');
    setError('');
  };

  const handleEditPhoto = async (e) => {
    e.preventDefault();

    if (!title || !url || !thumbnailUrl) {
      setError('All fields are required');
      return;
    }

    const updatePhoto = { albumId: photo.albumId, title, url, thumbnailUrl };
    const response = await updatePhoto(updatePhoto);
    setPhotos((prev) => [...prev, response.data]);

    setEditMode(false)
    setTitle('');
    setUrl('');
    setThumbnailUrl('');
    setError('');
  };

  return (
    <form className="photo-form" onSubmit={
      editMode ? handleEditPhoto : handleAddPhoto
    }>
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Photo title"
        className="form-input-title"
      />
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Photo URL"
        className="form-input-url"
      />
      <input
        type="text"
        value={thumbnailUrl}
        onChange={(e) => setThumbnailUrl(e.target.value)}
        placeholder="Thumbnail URL"
        className="form-input-thumbnail-url"
      />
      <button type="submit" className="btn btn-blue">
        {editMode ? "Edit" : "Add"}
      </button>
    </form>
  );
}
