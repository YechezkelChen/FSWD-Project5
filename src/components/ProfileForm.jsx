import PropTypes from "prop-types";

import { createUser } from "../utils/User.js";

export default function ProfileForm(setUser, username) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      username: username,
      address: null,
      geo: null,
    };

    createUser(user).then((response) => {
      setUser(response);
    });

    form.reset();

    // move back to the profile page
    window.location.href = "/profile";
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-blue">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

ProfileForm.propTypes = {
  setUser: PropTypes.func.isRequired,
};
