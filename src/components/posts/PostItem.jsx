import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import CommentForm from "../comments/CommentForm.jsx";
import CommentList from "../comments/CommentList.jsx";

import "../../pages/styles/Posts.css";
import "../styles/Button.css";

import { getPostsComments } from "../../utils/Comments.js";
import { deletePost } from "../../utils/Post.js";

import {
  addComment,
  deleteComment,
  updateComment,
} from "../../utils/Comments.js";

export default function PostItem({ posts, setPosts, setFilteredPosts, post, userId }) {
  const [showContent, setShowContent] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await getPostsComments(post.id);
      setComments(response.data);
    };

    fetchComments();
  }, [post.id]);

  const toggleContent = async () => {
    setShowContent(!showContent);
    if (!showContent) {
      const response = await getPostsComments(post.id);
      setComments(response.data);
    }
  };

  const handleAddComment = async (comment) => {
    const response = await addComment(post.id, comment);
    setComments([...comments, response.data]);
  };

  const handleDeleteComment = async (commentId) => {
    await deleteComment(commentId);
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  const handleUpdateComment = async (commentId, updatedText) => {
    const response = await updateComment(commentId, updatedText);
    setComments(
      comments.map((comment) =>
        comment.id === commentId ? response.data : comment
      )
    );
  };

  const handleDeletePost = async () => {
    await deletePost(post.id);
    setFilteredPosts(posts.filter((post_) => post_.id !== post.id));
    setPosts(posts.filter((post_) => post_.id !== post.id));
  };

  return (
    <div className="post-item">
      {userId == post.userId && <span className="post-user">You</span>}
      <div className="post-body-c">
        <p>
          <Link className="post-id" to={`/posts/${post.id}`}>
            {post.id}
          </Link>
          . {post.title}
        </p>
        <div className="btn-group">
          {userId == post.userId && (
            <button className="btn btn-red btn-sm" onClick={handleDeletePost}>
              Delete
            </button>
          )}
          <button className="btn btn-blue btn-sm" onClick={toggleContent}>
            {showContent ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      {showContent && (
        <div className="post-comments">
          <div className="post-body-c">
            <span className="post-body">{post.body}</span>
            <button
              className="btn btn-blue btn-sm"
              onClick={() => setShowComments(!showComments)}
            >
              {showComments ? "Hide" : "Show"} Comments
            </button>
          </div>
          {showComments && (
            <>
              <CommentList
                comments={comments}
                userId={userId}
                deleteComment={handleDeleteComment}
                updateComment={handleUpdateComment}
              />
              <CommentForm
                userId={userId}
                postId={post.id}
                addComment={handleAddComment}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
}

PostItem.propTypes = {
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
  setFilteredPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  userId: PropTypes.string,
};
