import EmployeeForm from "../components/EmployeeForm";
import Sidebar from "../components/Sidebar";
import UserProfile from "../components/UserProfile";
import "../styles/pages/Home.css";

function Home() {
  return (
    <>
      <Sidebar />
      <UserProfile />
      <main>
        <h2 className="page-title">Create Employee</h2>
        <EmployeeForm />
      </main>
    </>
  );
}

export default Home;
