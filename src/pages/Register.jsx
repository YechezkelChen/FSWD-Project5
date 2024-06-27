import "./styles/Pages.css";

import RegisterForm from "../components/auth/RegisterForm";

export default function Register() {
  return (
    <div className="main main-auth">
      <h1 className="page-header">Register</h1>
      <RegisterForm />
    </div>
  );
}
