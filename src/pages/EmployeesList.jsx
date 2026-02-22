import Sidebar from "../components/Sidebar";
import UserProfile from "../components/UserProfile";
import "../styles/pages/EmployeesList.css";

function EmployeesList() {
  return (
    <>
      <Sidebar />
      <UserProfile />
      <main>
        <h2 className="page-title">Current Employees</h2>
      </main>
    </>
  );
}

export default EmployeesList;
