import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/UserProfile.css";

export default function UserProfile() {
  return (
    <Link to="/login" className="user-profile" aria-label="Connexion au compte">
      <svg
        className="user-profile-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M4 20c0-4 4-6 8-6s8 2 8 6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    </Link>
  );
}
