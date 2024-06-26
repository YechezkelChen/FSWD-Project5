import PropTypes from 'prop-types'

import PostItem from './PostItem.jsx';

import '../../pages/styles/Posts.css';

export default function PostList({ userId, posts, setPosts }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <PostItem key={post.id} userId={userId} post={post} setPosts={setPosts} />
      ))}
    </div>
  );
}

PostList.propTypes = {
  userId: PropTypes.string,
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
};