import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";
import "../styles/pages/LoginPage.css";

function LoginPage() {
  return (
    <div className="login-page">
      <Layout>
        <h2 className="page-title">Sign in</h2>
        <LoginForm />
      </Layout>
    </div>
  );
}

export default LoginPage;
