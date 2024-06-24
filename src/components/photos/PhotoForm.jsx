import React, { useState } from 'react';

import '../../pages/styles/Albums.css';

export default function PhotoForm({ albumId, addPhoto }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !url || !thumbnailUrl) {
      setError('All fields are required');
      return;
    }

    const newPhoto = { albumId, title, url, thumbnailUrl };
    addPhoto(newPhoto);
    setTitle('');
    setUrl('');
    setThumbnailUrl('');
    setError('');
  };

  return (
    <form className="photo-form" onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Photo title"
        className="form-input"
      />
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Photo URL"
        className="form-input"
      />
      <input
        type="text"
        value={thumbnailUrl}
        onChange={(e) => setThumbnailUrl(e.target.value)}
        placeholder="Thumbnail URL"
        className="form-input"
      />
      <button type="submit" className="btn btn-blue">Add Photo</button>
    </form>
  );
}
