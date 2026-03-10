const BASE_URL = import.meta.env.VITE_API_URL;

export async function createEmployee(employee) {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  employees.push(employee);
  localStorage.setItem("employees", JSON.stringify(employees));
}

export async function getEmployees() {
  return JSON.parse(localStorage.getItem("employees")) || [];
}
