import PropTypes from "prop-types";
import { useEffect, useState } from "react";

import "../styles/Form.css";
import "../styles/Posts.css";

export default function SearchPost({ posts, setPosts }) {
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("title");

  useEffect(() => {
    let filteredPosts = [...posts];
    if (search) {
      if (searchBy === "title") {
        filteredPosts = filteredPosts.filter((post) =>
          post.title.includes(search)
        );
      }
      if (searchBy === "id") {
        filteredPosts = filteredPosts.filter((post) =>
          post.id.toString().includes(search)
        );
      }
      // filteredPosts = filteredPosts.filter(
      //   (post) =>
      //     post.title.includes(search) || post.id.toString().includes(search)
      // );
    }

    setPosts(filteredPosts);
  }, [search, searchBy, posts, setPosts]);

  return (
    <div className="post-filters">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-input"
        placeholder="Search posts by title or serial number"
      />
      <select
        value={searchBy}
        onChange={(e) => setSearchBy(e.target.value)}
        className="form-select"
      >
        <option value="title">Title</option>
        <option value="id">Serial Number</option>
      </select>
    </div>
  );
}

SearchPost.propTypes = {
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
};
