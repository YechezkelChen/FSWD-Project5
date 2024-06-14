export default function RegisterForm() {
    return <form action="">
        <div className="form-group">
            <label htmlFor="register-email">Email</label>
            <input type="email" name="register-email" id="register-email" />
        </div>
        <div className="form-group">
            <label htmlFor="register-password">Password</label>
            <input type="password" name="register-password" id="register-password" />
        </div>
        <div className="form-group">
            <label htmlFor="register-confirm-password">Confirm Password</label>
            <input type="password" name="register-confirm-password" id="register-confirm-password" />
        </div>
        <button type="submit">Register</button>
    </form>
}