import PropTypes from "prop-types";

export default function PostDetails({ post }) {
  return (
    <div className="post-details">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

PostDetails.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
