//1. To handle in TODO: here and in Todos.jsx!

//2. To handle in PostForm.jsx

//3. To handle in PostItem.jsx,
// and all the components that go from there
// the components of Comments!

import { useEffect, useState } from "react";

import PostForm from "../components/posts/PostForm.jsx";
import PostList from "../components/posts/PostList.jsx";
import SearchPost from "../components/posts/SearchPost";

import "../components/styles/Button.css";
import "../components/styles/Form.css";
import "./styles/Posts.css";

// import { getLoggedUser } from "../utils/loggedUsers.js";

export default function Posts() {
  // const url = 'https://jsonplaceholder.typicode.com/todos'
  const url = "http://localhost:3001/posts";
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  // const user = getLoggedUser();
  const userId = 1; //TODO: to change to real userId

  useEffect(() => {
    fetch(`${url}?userId=${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
      })
      .catch((error) => console.error("Error reading posts:", error));
  }, [posts]); //TODO: to think how to drop this, because is fuck the serch

  return (
    <div className="main">
      <h1 className="posts-header">Posts</h1>
      <PostForm />
      <SearchPost posts={posts} setPosts={setFilteredPosts} />
      <PostList
        url={url}
        userId={userId}
        posts={filteredPosts}
        setPosts={setPosts}
      />
    </div>
  );
}
