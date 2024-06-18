import "./styles/Button.css";
import "./styles/Form.css";

// getting the needed function from the utils
import { loginUser, getUserEmail } from "../utils/loggedUsers";
import hash from "../utils/hash";

// The login form has
// - email field
// - password field
// - submit button

export default function LoginForm() {
  // when the form is submitted
  const handleSubmit = async (event) => {
    event.preventDefault();

    // checking if the email is already registered
    // if the email is not registered, the user is not allowed to log in
    const email = document.getElementById("login-email").value;

    // getUserEmail(email).then((user) => {
    //   if (user.length === 0) {
    //     alert("Email is not registered");
    //     return;
    //   }
    // });

    // get the user email and store it in the user variable
    const user = await getUserEmail(email);

    // if the email is not registered
    if (user.length === 0) {
      alert("Email is not registered");
      return;
    }

    // get the email and password from the form
    const password = document.getElementById("login-password").value;

    // if the email is registered and the password is correct
    if (user.password !== hash(password)) {
      // log in the user
      alert("Incorrect password");
      return;
    }

    // log in the user
    loginUser({ email, password });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="login-email">Email</label>
        <input
          className="form-input"
          type="email"
          name="login-email"
          id="login-email"
          placeholder="example@domain.com"
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
