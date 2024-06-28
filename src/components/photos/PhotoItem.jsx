import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { AsyncImage } from '../general/AsyncImage';

import "../styles/PhotoItem.css";

export default function PhotoItem({ photo }) {
  return (
    <>
      <div className="photo-item">
        <AsyncImage url={photo.thumbnailUrl} alt={photo.title} />
        <Link className="post-id" to={`/photos/${photo.id}`}>
          {photo.title}
        </Link>
      </div>
    </>
  );
}

PhotoItem.propTypes = {
  photo: PropTypes.object.isRequired,
};
