import { Link } from "react-router-dom";
import "../styles/pages/ErrorPage.css";

function ErrorPage() {
  return (
    <>
      <main className="main error-page">
        <div className="error-container">
          <h1 className="error-code">404</h1>
          <h2 className="error-title">Page Not Found</h2>
          <p className="error-message">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="error-button">
            Back to Home
          </Link>
        </div>
      </main>
    </>
  );
}

export default ErrorPage;
