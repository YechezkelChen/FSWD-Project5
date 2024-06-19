import React, { useState, useEffect } from 'react';
import '../pages/styles/Posts.css';

export default function SearchPost({ posts, setPosts }) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    let filteredPosts = [...posts];
    if (search) {
      filteredPosts = filteredPosts.filter(
        post =>
          post.title.includes(search) ||
          post.id.toString().includes(search)
      );
    }

    setPosts(filteredPosts);
  }, [, search])

  return (
    <div className="post-filters">
      <input
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="form-input"
        placeholder="Search posts by title or serial number"
      />
    </div>
  );
}
