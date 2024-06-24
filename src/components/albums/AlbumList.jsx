import React, { useState } from 'react';
import AlbumItem from './AlbumItem.jsx';

import '../../pages/styles/Albums.css';

export default function AlbumList({ albums, selectedAlbum, setSelectedAlbum }) {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredAlbums = albums.filter(album =>
    album.title.toLowerCase().includes(search.toLowerCase()) ||
    album.id.toString().includes(search)
  );

  return (
    <div className="album-list">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search albums..."
        className="search-input"
      />
      {filteredAlbums.map(album => (
        <AlbumItem
          key={album.id}
          album={album}
          setSelectedAlbum={setSelectedAlbum}
          isSelected={selectedAlbum && selectedAlbum.id === album.id}
        />
      ))}
    </div>
  );
}
