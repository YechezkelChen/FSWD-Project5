import PropTypes from "prop-types";

import PostItem from "./PostItem";

export default function PostList({ postList }) {
  return (
    <div className="post-list">
      {postList.map((post, index) => (
        <PostItem key={index} post={post} />
      ))}
    </div>
  );
}

PostList.propTypes = {
  postList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};
