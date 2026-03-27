async function genericCall(fn, errorMessage = "EmployeeService error") {
  try {
    return await fn();
  } catch (error) {
    console.error(errorMessage, error);
    throw error;
  }
}

export async function createEmployee(employee) {
  return genericCall(() => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
  }, "Failed to create employee");
}

export async function getEmployees() {
  return genericCall(() => {
    return JSON.parse(localStorage.getItem("employees")) || [];
  }, "Failed to fetch employees");
}

export async function deleteEmployeeById(id) {
  return genericCall(() => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const remainingEmployees = employees.filter(
      (employee) => employee.id !== id,
    );
    localStorage.setItem("employees", JSON.stringify(remainingEmployees));
  }, "Failed to delete employee");
}

export async function updateEmployee(employee) {
  return genericCall(() => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const updatedEmployees = employees.map((e) =>
      e.id === employee.id ? employee : e,
    );
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  }, "Failed to update employee");
}
