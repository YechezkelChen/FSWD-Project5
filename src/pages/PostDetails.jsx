import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./styles/PostDetails.css";

import { getPostById } from "../utils/Post.js";
import { getUserByUsername } from "../utils/User.js";
import { getLoggedUser } from "../utils/loggedUsers.js";

export default function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const loggedUser = getLoggedUser();

      if (!loggedUser) {
        // go to the login page
        window.location.href = "/login";
        return;
      }

      const users = await getUserByUsername(loggedUser.username);
      let user = users[0];

      setUser(user);

      const response = await getPostById(id);
      setPost(response.data);
    }

    fetchData();
  }, [id]);

  return (
    <div className="main">
      {/* if the user is not null and the author of the post is the user display a message */}

      {user !== null && post !== null && post.userId === user.id && (
        <p className="post-author">You</p>
      )}

      {post === null && <p>Loading post...</p>}
      {post === undefined && <p>Post not found</p>}
      {post && (
        <div className="post-details">
          <h2 className="post-header">{post.title}</h2>
          <p className="post-body">{post.body}</p>
          {/* {post.userId === user.id && (
        <button className="delete" onClick={deletePost}>
          Delete Post
        </button>
      )} */}
        </div>
      )}
    </div>
  );
}
