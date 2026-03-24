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
