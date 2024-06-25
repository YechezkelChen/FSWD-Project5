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

import { getPostsByUser } from "../utils/Post.js";
import { getUserByUsername } from "../utils/User.js";
import { getLoggedUser } from "../utils/loggedUsers.js";

export default function Posts() {

  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const loggedUser = getLoggedUser();
  const user = getUserByUsername(loggedUser);
  const userId = user.id;
  // const userId = 1;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await getPostsByUser(userId);
      setPosts(response.data);
      setFilteredPosts(response.data);
    };

    fetchPosts();
  }, [userId]); 

  return (
    <div className="main">
      <h1 className="posts-header">Posts</h1>
      <PostForm />
      <SearchPost posts={posts} setPosts={setFilteredPosts} />
      <PostList
        userId={userId}
        posts={filteredPosts}
        setPosts={setPosts}
      />
    </div>
  );
}
