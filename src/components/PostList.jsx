import React from 'react';
import PostItem from './PostItem';
import '../pages/styles/Posts.css';

export default function PostList({ url, userId, posts, setPosts }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <PostItem key={post.id} url={url} userId={userId} post={post} setPosts={setPosts} />
      ))}
    </div>
  );
}
