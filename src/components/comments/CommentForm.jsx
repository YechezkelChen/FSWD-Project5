import PropTypes from "prop-types";
import { useState } from "react";

import "../../pages/styles/Posts.css";

export default function CommentForm({ userId, postId, addComment }) {
  const [newComment, setNewComment] = useState("");
  const [error, setError] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() === "") {
      setError("Comment cannot be empty");
      return;
    }

    addComment({ userId, body: newComment, postId });
    setNewComment("");
    setError("");
  };

  return (
    <div className="comment-form">
      <textarea
        // type="text"
        className="comment-input"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button className="btn btn-green btn-sm" onClick={handleAddComment}>
        Add Comment
      </button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

CommentForm.propTypes = {
  userId: PropTypes.number.isRequired,
  postId: PropTypes.number.isRequired,
  addComment: PropTypes.func.isRequired,
};
