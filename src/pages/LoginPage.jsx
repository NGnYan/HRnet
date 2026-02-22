import "../styles/pages/LoginPage.css";
import LoginForm from "../components/LoginForm";
import Sidebar from "../components/Sidebar";
import UserProfile from "../components/UserProfile";

function LoginPage() {
  return (
    <div className="login-page">
      <Sidebar />
      <UserProfile />

      <main className="login-main">
        <h2 className="page-title">Sign in</h2>
        <LoginForm />
      </main>
    </div>
  );
}

export default LoginPage;
