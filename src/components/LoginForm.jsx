import { useState } from "react";
import "../styles/components/LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [error, setError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setEmailError("Invalid email");
      return;
    }

    setEmail("");
    setPassword("");
    setRememberMe(false);
    setEmailError("");
    setError("");
  };

  return (
    <section className="sign-in-content">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="email"
            id="username"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError("");
            }}
            required
          />
          {emailError && <p className="login-error-message">{emailError}</p>}
        </div>

        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me-checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="remember-me" id="remember-me">
            Remember me
          </label>
        </div>

        {error && <div className="login-error-message">{error}</div>}

        <button className="sign-in-button" type="submit">
          Sign In
        </button>
      </form>
    </section>
  );
}

export default LoginForm;
