import React from 'react';
import PhotoList from '../photos/PhotoList.jsx';

import '../../pages/styles/Albums.css';

export default function AlbumItem({ album, setSelectedAlbum, isSelected }) {
  const handleClick = () => {
    setSelectedAlbum(isSelected ? null : album);
  };

  return (
    <div className="album-item-container">
      <div className="album-item" onClick={handleClick}>
        <span className="album-title">{album.id}. {album.title}</span>
      </div>
      {isSelected && <PhotoList key={album.id} album={album} />}
    </div>
  );
}
