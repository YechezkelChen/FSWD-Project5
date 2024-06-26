import { PropTypes } from 'prop-types';

export default function PostDetails({ post, userId, setPosts }) {
    const deletePost = () => {
        fetch(`/api/posts/${post.id}`, {
        method: 'DELETE',
        })
        .then(() => {
            setPosts((posts) => posts.filter((p) => p.id !== post.id));
        })
        .catch((error) => console.error('Error deleting post:', error));
    };
    
    return (
        <div className="post-details">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        {post.userId === userId && (
            <button className="delete" onClick={deletePost}>
            Delete Post
            </button>
        )}
        </div>
    );
}

PostDetails.propTypes = {
  post: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
  setPosts: PropTypes.func.isRequired,
};