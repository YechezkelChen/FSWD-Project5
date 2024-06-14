import PropTypes from "prop-types";

import { useState } from "react";

export default function SearchPost({ postList, setPostList }) {
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("title");

  return (
    <form action="">
      <div className="form-group">
        <label htmlFor="search">Search Post</label>
        <input
          type="text"
          id="search"
          placeholder={"Search post by " + searchBy}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <select
          name="search-selector"
          id="search-selector"
          onChange={(e) => {
            setSearchBy(e.target.value);
          }}
        >
          <option value="title">Title</option>
          <option value="id">ID</option>
        </select>
      </div>
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          let mutPostList = postList;
          mutPostList = mutPostList.filter((post) => {
            return post[searchBy].includes(search);
          });
          setPostList([...mutPostList]);
        }}
      >
        Search
      </button>
    </form>
  );
}

SearchPost.propTypes = {
  setPostList: PropTypes.func.isRequired,
  postList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })
  ).isRequired,
};
