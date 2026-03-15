import LoginForm from "../components/LoginForm";
import "../styles/pages/LoginPage.css";

function LoginPage() {
  return (
    <div className="login-page">
      <main className="login-main">
        <h2 className="page-title">Sign in</h2>
        <LoginForm />
      </main>
    </div>
  );
}

export default LoginPage;
