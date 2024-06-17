import "./styles/Form.css"
import "./styles/Button.css"


// The login form has
// - email field
// - password field
// - submit button

export default function LoginForm() {
  return (
    <form action="">
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
      <button className="btn btn-blue" type="submit">Login</button>
    </form>
  );
}
