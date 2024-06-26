import PropTypes from "prop-types";

import AlbumItem from "./AlbumItem.jsx";

import "../styles/Albums.css";

export default function AlbumList({
  userId,
  albums,
  setAlbums,
  setFilteredAlbums,
}) {
  return (
    <div className="album-list">
      {albums.map((album) => (
        <AlbumItem
          key={album.id}
          userId={userId}
          album={album}
          setAlbums={setAlbums}
          setFilteredAlbums={setFilteredAlbums}
          albums={albums}
        />
      ))}
    </div>
  );
}

AlbumList.propTypes = {
  userId: PropTypes.string,
  albums: PropTypes.array.isRequired,
  setAlbums: PropTypes.func.isRequired,
  setFilteredAlbums: PropTypes.func.isRequired,
};
