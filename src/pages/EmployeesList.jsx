import { DataTable } from "@ngnyan/data-table";
import "@ngnyan/data-table/dist/data-table.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setEmployees, deleteEmployee } from "../redux/employeesSlice.js";
import { getEmployees, deleteEmployeeById } from "../employeeService.js";
import employeeColumns from "../data/employeeColumns.json";
import LoadingLayout from "../components/LoadingState.jsx";
import "../styles/pages/EmployeesList.css";

function EmployeesList() {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadEmployees() {
      setIsLoading(true);
      const data = await getEmployees();
      dispatch(setEmployees(data));
      setIsLoading(false);
    }
    loadEmployees();
  }, [dispatch]);

  const handleDelete = async (row) => {
    await deleteEmployeeById(row.id);
    dispatch(deleteEmployee(row.id));
  };

  const handleEdit = (row) => {
    navigate("/", { state: { employee: row } });
  };

  return (
    <>
      <h2 className="employees_list_page-title">Current Employees</h2>
      <div className="table-container">
        {isLoading ? (
          <LoadingLayout />
        ) : (
          <DataTable
            columns={employeeColumns}
            data={employees}
            headerBgColor="#87A353"
            searchable={true}
            sortable={true}
            headerSortable={true}
            sortPlaceholder="-"
            searchPosition="left"
            sortPosition="right"
            sortLabel="Sort by :"
            onDelete={handleDelete}
            onEdit={handleEdit}
            actionEditColor="#87A353"
            actionDeleteColor="#e05252"
            pagination={true}
            rowsPerPage={3}
            paginationBgColor="#87A353"
            paginationActiveTextColor="#FFFFFF"
            paginationTextColor="#000000"
          />
        )}
      </div>
    </>
  );
}

export default EmployeesList;
