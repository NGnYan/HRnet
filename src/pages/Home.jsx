import EmployeeForm from "../components/EmployeeForm";
import "../styles/pages/Home.css";

function Home() {
  return (
    <>
      <h2 className="page-title">Create Employee</h2>
      <EmployeeForm />
    </>
  );
}

export default Home;
