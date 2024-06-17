import "./styles/Pages.css";
import "./styles/Login.css";

import LoginForm from "../components/LoginForm";


export default function Login() {
  return (
    <div className="main">
      <h1 className="page-header">Login</h1>
      <LoginForm />
    </div>
  );
}
