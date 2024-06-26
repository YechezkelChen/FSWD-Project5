import PropTypes from "prop-types";

import "../styles/Button.css";
import "../styles/Form.css";
import "../styles/Posts.css";

import { createPost } from "../../utils/Post";

export default function PostForm({ setPosts }) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const post = {
      title: form.title.value,
      body: form.body.value,
    };

    const response = await createPost(post);

    if (response.status === 201) {
      setPosts((prevPosts) => [response.data, ...prevPosts]);
    }
    form.reset();
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-header">Create New Post</h2>
        <div className="input-group">
          <label htmlFor="title">Title</label>
          <input
            className="form-input"
            type="text"
            id="title"
            name="title"
            placeholder="Enter Title"
          />
        </div>
        <div className="input-group">
          <label htmlFor="body">Body</label>
          <textarea
            className="form-input"
            id="body"
            name="body"
            placeholder="Write your post"
          />
        </div>
        <button className="btn btn-green btn-l">Post</button>
      </form>
    </>
  );
}

PostForm.propTypes = {
  setPosts: PropTypes.func.isRequired,
};
