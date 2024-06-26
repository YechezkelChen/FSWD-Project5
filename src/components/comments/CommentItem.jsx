import PropTypes from "prop-types";

import { useState } from "react";

import "../../pages/styles/Posts.css";

export default function CommentItem({
  comment,
  userId,
  deleteComment,
  updateComment,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.body);

  const handleUpdate = () => {
    updateComment(comment.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="comment-item">
      {isEditing ? (
        <>
          <textarea
            className="comment-input"
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <div className="btn-group">
            <button className="btn btn-sm btn-green" onClick={handleUpdate}>
              Save
            </button>
            <button
              className="btn btn-sm btn-red"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <span>{comment.body}</span>
          {comment.userId === userId && (
            <div className="btn-group">
              <button
                className="btn btn-sm btn-blue"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-red"
                onClick={() => deleteComment(comment.id)}
              >
                Delete
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

CommentItem.propTypes = {
  comment: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
  deleteComment: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired,
};
