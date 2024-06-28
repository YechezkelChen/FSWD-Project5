import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../styles/Albums.css";
import "../styles/Button.css";

import { deleteAlbum } from "../../utils/Album.js";


export default function AlbumItem({
  userId,
  album,
  setAlbums,
  setFilteredAlbums,
  albums,
}) {
  const handleDeleteAlbum = async () => {
    await deleteAlbum(album.id);
    setFilteredAlbums(albums.filter((album_) => album_.id !== album.id));
    setAlbums(albums.filter((album_) => album_.id !== album.id));
  };

  return (
    <div className="album-item">
      {userId == album.userId && <span className="album-user">You</span>}
      <div className="album-body-c">
        <p>
          <Link className="album-id" to={`/albums/${album.id}`}>
            {album.id}
          </Link>
          . {album.title}
        </p>
        <div className="btn-group">
          {userId == album.userId && (
            <button className="btn btn-red btn-sm" onClick={handleDeleteAlbum}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

AlbumItem.propTypes = {
  userId: PropTypes.string,
  album: PropTypes.object.isRequired,
  setAlbums: PropTypes.func.isRequired,
  setFilteredAlbums: PropTypes.func.isRequired,
  albums: PropTypes.array.isRequired,
};
