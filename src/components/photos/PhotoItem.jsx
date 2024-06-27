import PropTypes from 'prop-types';

import { AsyncImage } from '../general/AsyncImage';

import "../styles/PhotoItem.css";

export default function PhotoItem({ photo }) {
  return (
    <>
     <div className="photo-item">
      {/* <img src={photo.thumbnailUrl} alt={photo.title} /> */}
      <AsyncImage url={photo.thumbnailUrl} alt={photo.title} />
      <p>{photo.title}</p>
     </div>
    </>
  );
}

PhotoItem.propTypes = {
  photo: PropTypes.object.isRequired,
};
