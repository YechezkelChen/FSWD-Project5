import PropTypes from "prop-types";
import { useEffect, useState } from "react";

// import "../../pages/styles/Post.css";

export default function SearchPost({ posts, setPosts }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    let filteredPosts = [...posts];
    if (search) {
      filteredPosts = filteredPosts.filter(
        (post) =>
          post.title.includes(search) || post.id.toString().includes(search)
      );
    }

    setPosts(filteredPosts);
  }, [posts, search, setPosts]);

  return (
    <div className="post-filters">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="form-input"
        placeholder="Search posts by title or serial number"
      />
    </div>
  );
}

SearchPost.propTypes = {
  posts: PropTypes.array.isRequired,
  setPosts: PropTypes.func.isRequired,
};
