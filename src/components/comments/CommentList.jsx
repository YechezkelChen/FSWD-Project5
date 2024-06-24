import React from 'react';
import CommentItem from './CommentItem.jsx';

import '../../pages/styles/Posts.css';

export default function CommentList({ comments, userId, deleteComment, updateComment }) {
    return (
        <div className="comment-section">
            <h3>Comments</h3>
            {comments.map(comment => (
                <CommentItem
                    key={comment.id}
                    comment={comment}
                    userId={userId}
                    deleteComment={deleteComment}
                    updateComment={updateComment}
                />
            ))}
        </div>
    );
}
