import React from 'react';

import '../../pages/styles/Albums.css';

export default function AlbumItem({ album, setSelectedAlbum }) {
  return (
    <div className="album-item" onClick={() => setSelectedAlbum(album)}>
      <span className="album-title">{album.id}. {album.title}</span>
    </div>
  );
}
