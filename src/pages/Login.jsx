import "./styles/Pages.css";
import "./styles/Login.css";

import LoginForm from "../components/auth/LoginForm";


export default function Login() {
  return (
    <div className="main main-auth">
      <h1 className="page-header">Login</h1>
      <LoginForm />
    </div>
  );
}
