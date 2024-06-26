import PropTypes from 'prop-types';

import PhotoItem from './PhotoItem.jsx';

import '../styles/Albums.css';


export default function PhotoList({ photos, userId, deletePhoto, updatePhoto }) {

  return (
    <div className="photo-section">
      <h3 className='photos-header'>Photos</h3>
      {photos.map(photo => (
        <PhotoItem
          key={photo.id}
          photo={photo}
          userId={userId}
          deletePhoto={deletePhoto}
          updatePhoto={updatePhoto}
        />
      ))}
    </div>
  );
}

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
  userId: PropTypes.string.isRequired,
  deletePhoto: PropTypes.func.isRequired,
  updatePhoto: PropTypes.func.isRequired,
};
