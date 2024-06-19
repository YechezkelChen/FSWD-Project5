import React, { useState } from 'react';
import '../pages/styles/Posts.css';

export default function CommentForm({ userId, postId, addComment }) {
    const [newComment, setNewComment] = useState('');
    const [error, setError] = useState('');

    const handleAddComment = () => {
        if (newComment.trim() === '') {
            setError('Comment cannot be empty');
            return;
        }

        addComment({ userId, body: newComment, postId });
        setNewComment('');
        setError('');
    };

    return (
        <div className="comment-form">
            <input
                type="text"
                value={newComment}
                onChange={e => setNewComment(e.target.value)}
                placeholder="Add a comment"
            />
            <button onClick={handleAddComment}>Add Comment</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
}
