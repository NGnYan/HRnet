import { useLocation } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
import "../styles/pages/Home.css";

function Home() {
  const location = useLocation();
  const employeeToEdit = location.state?.employee || null;

  return (
    <>
      <h2 className="home__page-title">
        {employeeToEdit ? "Edit Employee" : "Create Employee"}
      </h2>
      <EmployeeForm
        key={employeeToEdit?.id ?? "new"}
        employee={employeeToEdit}
      />
    </>
  );
}

export default Home;
