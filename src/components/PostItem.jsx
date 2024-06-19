import React, { useState, useEffect } from 'react';
import PostDetails from './PostDetails';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import '../pages/styles/Posts.css';

export default function PostItem({ post, userId, setPosts }) {
  const [showContent, setShowContent] = useState(false);
  const [comments, setComments] = useState([]);

  const toggleContent = () => {
    setShowContent(!showContent);
    if (!showContent) {
      // Fetch comments when the content is shown
      fetch(`/api/posts/${post.id}/comments`)
        .then(response => response.json())
        .then(data => setComments(data))
        .catch(error => console.error('Error fetching comments:', error));
    }
  };

  const addComment = (comment) => {
    fetch(`/api/posts/${post.id}/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    })
      .then(response => response.json())
      .then(data => setComments([...comments, data]))
      .catch(error => console.error('Error adding comment:', error));
  };

  const deleteComment = (commentId) => {
    fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setComments(comments.filter(comment => comment.id !== commentId));
      })
      .catch(error => console.error('Error deleting comment:', error));
  };

  const updateComment = (commentId, updatedText) => {
    fetch(`/api/comments/${commentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ body: updatedText }),
    })
      .then(response => response.json())
      .then(updatedComment => {
        setComments(comments.map(comment =>
          comment.id === commentId ? updatedComment : comment
        ));
      })
      .catch(error => console.error('Error updating comment:', error));
  };

  return (
    <div className="post-item">
      <span>{post.id}. {post.title}</span>
      <button onClick={toggleContent}>
        {showContent ? 'Hide' : 'Show'}
      </button>
      {showContent && (
        <div>
          <span>{post.body}</span>
          <CommentList
            comments={comments}
            userId={userId}
            deleteComment={deleteComment}
            updateComment={updateComment}
          />
          <CommentForm userId={userId} postId={post.id} addComment={addComment} />
        </div>
      )}
    </div>
  );
}
