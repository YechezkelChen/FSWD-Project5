import PropTypes from 'prop-types';

import CommentItem from './CommentItem.jsx';

import '../../pages/styles/Posts.css';

export default function CommentList({ comments, userId, deleteComment, updateComment }) {
    return (
        <div className="comment-section">
            <h3 className='comments-header'>Comments</h3>
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

CommentList.propTypes = {
    comments: PropTypes.array.isRequired,
    userId: PropTypes.number.isRequired,
    deleteComment: PropTypes.func.isRequired,
    updateComment: PropTypes.func.isRequired,
};