// The login form has
// - email field
// - password field
// - submit button

export default function LoginForm() {
  return <form action="">
    <div className="form-group">
      <label htmlFor="login-email">Email</label>
      <input type="email" name="login-email" id="login-email" />
    </div>
    <div className="form-group">
      <label htmlFor="login-password">Password</label>
      <input type="password" name="login-password" id="login-password" />
    </div>
    <button type="submit">Login</button>
  </form>;
}
