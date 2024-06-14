import PropTypes from "prop-types";

export default function PostItem({ post }) {
  return (
    <div className="post-item">
      <p>{post.id}</p>
      <h2>{post.title}</h2>
    </div>
  );
}

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
