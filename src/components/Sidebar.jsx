import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/components/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/" className="sidebar__logo">
        <img src={logo} alt="HRnet logo" />
        <span>HRnet</span>
      </Link>

      <nav className="sidebar__nav">
        <Link to="/" className="sidebar__link">
          Create Employee
        </Link>

        <Link to="/employees" className="sidebar__link">
          Current Employees
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
