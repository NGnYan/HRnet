import { DataTable } from "@ngnyan/data-table";
import "@ngnyan/data-table/dist/data-table.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setEmployees } from "../redux/employeesSlice.js";
import { getEmployees } from "../employeeService.js";
import employeeColumns from "../data/employeeColumns.json";
import LoadingLayout from "../components/LoadingState.jsx";
import "../styles/pages/EmployeesList.css";

function EmployeesList() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadEmployees() {
      setIsLoading(true);
      const data = await getEmployees();
      dispatch(setEmployees(data));
      setIsLoading(false);
    }
    loadEmployees();
  }, [dispatch]);

  return (
    <>
      <h2 className="page-title">Current Employees</h2>
      <div className="table-container">
        {isLoading ? (
          <LoadingLayout />
        ) : (
          <DataTable
            columns={employeeColumns}
            data={employees}
            headerBgColor="#87A353"
            sortable={true}
            sortPlaceholder="-"
            sortPosition="right"
            sortLabel="Trier par :"
          />
        )}
      </div>
    </>
  );
}

export default EmployeesList;
