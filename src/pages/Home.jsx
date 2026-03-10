import Layout from "../components/Layout";
import EmployeeForm from "../components/EmployeeForm";
import "../styles/pages/Home.css";

function Home() {
  return (
    <Layout>
      <h2 className="page-title">Create Employee</h2>
      <EmployeeForm />
    </Layout>
  );
}

export default Home;
