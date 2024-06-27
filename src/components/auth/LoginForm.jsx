import "../styles/Button.css";
import "../styles/Form.css";

// getting the needed function from the utils
import { loginUser, getUserByName } from "../../utils/loggedUsers";
import hash from "../../utils/hash";

// The login form has
// - username field
// - password field
// - submit button

export default function LoginForm() {
  // when the form is submitted
  const handleSubmit = async (event) => {
    event.preventDefault();

    // checking if the email is already registered
    // if the email is not registered, the user is not allowed to log in
    const username = document.getElementById("login-username").value;

    // get the user email and store it in the user variable
    const users = await getUserByName(username);

    // if the email is not registered
    if (users.length === 0) {
      alert("username is not registered");
      return;
    }

    const user = users[0];

    // get the email and password from the form
    const password = document.getElementById("login-password").value;

    // if the email is registered and the password is correct
    if (user.password !== hash(password)) {
      // log in the user
      alert("Incorrect password");
      return;
    }

    // log in the user
    loginUser({ username, password });

    // redirect the user to the profile page
    window.location.href = "/profile";
  };

  return (
    <form className="form auth-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="login-username">User Name</label>
        <input
          className="form-input"
          type="text"
          name="login-username"
          id="login-username"
          placeholder="user name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="login-password">Password</label>
        <input
          className="form-input"
          type="password"
          name="login-password"
          id="login-password"
          placeholder="password"
        />
      </div>
      <button className="btn btn-blue" type="submit">
        Login
      </button>
    </form>
  );
}
