import PropTypes from 'prop-types'

import PostItem from './PostItem';

import '../pages/styles/Posts.css';

export default function PostList({ url, userId, posts, setPosts }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <PostItem key={post.id} url={url} userId={userId} post={post} setPosts={setPosts} />
      ))}
    </div>
  );
}

PostList.propTypes = {
  url: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
};