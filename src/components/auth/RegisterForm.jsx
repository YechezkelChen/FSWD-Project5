import "../styles/Button.css";
import "../styles/Form.css";

import { registerUser } from "../../utils/loggedUsers.js";

export default function RegisterForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the form values
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
    const confirmPassword = document.getElementById(
      "register-confirm-password"
    ).value;

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // create a new user object and
    // 1. store it in the local storage as the current user
    // 2. store it in the users array using the addUser function

    // create a new user object
    const user = {
      username,
      password,
    };

    // register the user return the user object so await for the response
    const response = await registerUser(user);

    // if the response is not null
    if (response) {
      // redirect to the profile page
      window.location.href = "/profile";
    }

    // clear the form
    document.getElementById("register-username").value = "";
    document.getElementById("register-password").value = "";
    document.getElementById("register-confirm-password").value = "";
  };

  return (
    <div className="main">
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="register-username">User Name</label>
          <input
            type="text"
            name="register-username"
            id="register-username"
            className="form-input"
            placeholder="user name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="register-password">Password</label>
          <input
            type="password"
            name="register-password"
            id="register-password"
            className="form-input"
            placeholder="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="register-confirm-password">Confirm Password</label>
          <input
            type="password"
            name="register-confirm-password"
            id="register-confirm-password"
            className="form-input"
            placeholder="password"
          />
        </div>
        <button className="btn btn-blue" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
