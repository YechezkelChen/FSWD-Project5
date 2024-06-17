import "./styles/Button.css";
import "./styles/Form.css";

export default function RegisterForm() {
  return (
    <div className="main">
      <form action="">
        <div className="form-group">
          <label htmlFor="register-email">Email</label>
          <input
            type="email"
            name="register-email"
            id="register-email"
            className="form-input"
            placeholder="example@domain.com"
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
        <button 
        className="btn btn-blue"
        type="submit">Register</button>
      </form>
    </div>
  );
}
