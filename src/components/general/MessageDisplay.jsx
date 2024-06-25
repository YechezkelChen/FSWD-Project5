import PropTypes from 'prop-types';

export default function MessageDisplay({ message }) {
  return <div>{message}</div>;
}

MessageDisplay.propTypes = {
    message: PropTypes.string.isRequired,
};