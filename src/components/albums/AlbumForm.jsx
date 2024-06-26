import PropTypes from "prop-types";

import "../styles/Button.css";
import "../styles/Form.css";
import "../styles/Albums.css";

import { createAlbum } from "../../utils/Album.js";

export default function AlbumForm({ setAlbums, userId }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const album = {
      title: form.title.value,
      userId: userId,
    };

    const response = await createAlbum(album);

    if (response.status === 201) {
      setAlbums((prevAlbums) => [response.data, ...prevAlbums]);
    }
    form.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-header">Create New Album</h2>
      <div className="input-group">
        <label htmlFor="title">Title</label>
        <input
          className="form-input"
          type="text"
          id="title"
          name="title"
          placeholder="Enter Title"
        />
      </div>
      <button className="btn btn-green btn-l">Add</button>
    </form>
  );
}

AlbumForm.propTypes = {
  setAlbums: PropTypes.func.isRequired,
  userId: PropTypes.string,
};
