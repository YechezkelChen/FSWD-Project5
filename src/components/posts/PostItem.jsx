import PropTypes from 'prop-types'

import { useState } from "react";

import CommentForm from "../comments/CommentForm.jsx";
import CommentList from "../comments/CommentList.jsx";

import "../../pages/styles/Posts.css";

// import { getPostsComments } from "../../utils/Comments.js";
import { getPostsByUser } from '../../utils/Post.js';

export default function PostItem({ post, userId }) {

  const [showContent, setShowContent] = useState(false);
  const [comments, setComments] = useState([]);

  const toggleContent = async () => {
    setShowContent(!showContent);
    if (!showContent) {
      const response = await getPostsByUser(post.id);
      setComments(response.data);
    }
  };

  const addComment = (comment) => {
    fetch(`/api/posts/${post.id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(comment),
    })
      .then((response) => response.json())
      .then((data) => setComments([...comments, data]))
      .catch((error) => console.error("Error adding comment:", error));
  };

  const deleteComment = (commentId) => {
    fetch(`/api/comments/${commentId}`, {
      method: "DELETE",
    })
      .then(() => {
        setComments(comments.filter((comment) => comment.id !== commentId));
      })
      .catch((error) => console.error("Error deleting comment:", error));
  };

  const updateComment = (commentId, updatedText) => {
    fetch(`/api/comments/${commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ body: updatedText }),
    })
      .then((response) => response.json())
      .then((updatedComment) => {
        setComments(
          comments.map((comment) =>
            comment.id === commentId ? updatedComment : comment
          )
        );
      })
      .catch((error) => console.error("Error updating comment:", error));
  };

  return (
    <div className="post-item">
      <span>
        {post.id}. {post.title}
      </span>
      <button className='btn btn-blue btn-sm' onClick={toggleContent}>{showContent ? "Hide" : "Show"}</button>
      {showContent && (
        <div>
          <span>{post.body}</span>
          <CommentList
            comments={comments}
            userId={userId}
            deleteComment={deleteComment}
            updateComment={updateComment}
          />
          <CommentForm
            userId={userId}
            postId={post.id}
            addComment={addComment}
          />
        </div>
      )}
    </div>
  );
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
};