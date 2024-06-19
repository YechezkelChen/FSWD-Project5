import React, { useState } from 'react';
import '../pages/styles/Posts.css';

export default function CommentItem({ comment, userId, deleteComment, updateComment }) {
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
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={handleUpdate}>Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <span>{comment.body}</span>
                    {comment.userId === userId && (
                        <>
                            <button onClick={() => setIsEditing(true)}>Edit</button>
                            <button onClick={() => deleteComment(comment.id)}>Delete</button>
                        </>
                    )}
                </>
            )}
        </div>
    );
}
