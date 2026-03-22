import { DataTable } from "@ngnyan/data-table";
import "@ngnyan/data-table/dist/data-table.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setEmployees } from "../redux/employeesSlice.js";
import { getEmployees } from "../employeeService.js";
import employeeColumns from "../data/employeeColumns.json";
import "../styles/pages/EmployeesList.css";

function EmployeesList() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);

  useEffect(() => {
    async function loadEmployees() {
      const data = await getEmployees();
      dispatch(setEmployees(data));
    }
    loadEmployees();
  }, [dispatch]);

  return (
    <>
      <h2 className="page-title">Current Employees</h2>
      <div className="table-container">
        <DataTable
          columns={employeeColumns}
          data={employees}
          headerBgColor="#87A353"
          sortable={true}
        />
      </div>
    </>
  );
}

export default EmployeesList;
