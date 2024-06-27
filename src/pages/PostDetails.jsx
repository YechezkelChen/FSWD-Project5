import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./styles/PostDetails.css";

import { deletePost, getPostById, updatePost } from "../utils/Post.js";
import { getUserByUsername } from "../utils/User.js";
import { getLoggedUser } from "../utils/loggedUsers.js";

export default function PostDetails() {
  const { id } = useParams();

  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  const [showForm, setShowForm] = useState(false);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

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

      setTitle(response.data.title);
      setBody(response.data.body);
    }

    fetchData();
  }, [id]);

  const handleDeletePost = async () => {
    await deletePost(id);
    window.location.href = "/";
  };

  const handleEditPost = async () => {
    setShowForm((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      id,
      title,
      body,
      userId: user.id,
    };

    const response = await updatePost(post);

    setPost(response.data);
    setTitle(response.data.title);
    setBody(response.data.body);

    setShowForm(false);
  };

  return (
    <div className="main">
      {user !== null && post !== null && post.userId === user.id && (
        <div className="page-header">
          <p className="post-author">You</p>
          <div className="btn-group">
            <button className="btn btn-blue" onClick={handleEditPost}>
              {showForm ? "Cancel" : "Edit Post"}
            </button>
            <button className="btn btn-red" onClick={handleDeletePost}>
              Delete Post
            </button>
          </div>
        </div>
      )}

      {post === null && <p>Loading post...</p>}
      {post === undefined && <p>Post not found</p>}
      {post && (
        <>
          {showForm ? (
            <div className="post-form">
              <form id="update-post-form" onSubmit={handleSubmit}>
                <h2 className="form-header">Update your post</h2>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <textarea
                  className="form-input"
                  placeholder="Body"
                  value={body}
                  onChange={(e) => {
                    setBody(e.target.value);
                  }}
                ></textarea>
                <button className="btn btn-blue">Save</button>
              </form>
            </div>
          ) : (
            <div className="post-details">
              <h2 className="post-header">{post.title}</h2>
              <p className="post-body">{post.body}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
