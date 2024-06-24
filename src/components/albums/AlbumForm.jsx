import React, { useState } from 'react';

import '../../pages/styles/Albums.css';

export default function AlbumForm({ userId, setAlbums }) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setError('Title is required');
      return;
    }

    const newAlbum = { userId, title };
    fetch('/api/albums', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newAlbum),
    })
      .then(response => response.json())
      .then(data => setAlbums(prevAlbums => [...prevAlbums, data]))
      .catch(error => console.error('Error adding album:', error));

    setTitle('');
    setError('');
  };

  return (
    <form className="album-form" onSubmit={handleSubmit}>
      {error && <div className="error">{error}</div>}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Album title"
        className="form-input"
      />
      <button type="submit" className="btn btn-blue">Add Album</button>
    </form>
  );
}
