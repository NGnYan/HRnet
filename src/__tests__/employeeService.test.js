import { describe, it, expect, beforeEach } from "vitest";
import {
  createEmployee,
  getEmployees,
  deleteEmployeeById,
  updateEmployee,
} from "../employeeService";

beforeEach(() => {
  localStorage.clear();
});

describe("createEmployee", () => {
  it("adds an employee to localStorage", async () => {
    const employee = { id: "1", firstName: "Alice", lastName: "Johnson" };
    await createEmployee(employee);
    const employees = JSON.parse(localStorage.getItem("employees"));
    expect(employees).toHaveLength(1);
    expect(employees[0].firstName).toBe("Alice");
  });

  it("adds multiple employees to localStorage", async () => {
    await createEmployee({ id: "1", firstName: "Alice" });
    await createEmployee({ id: "2", firstName: "Bob" });
    const employees = JSON.parse(localStorage.getItem("employees"));
    expect(employees).toHaveLength(2);
  });
});

describe("getEmployees", () => {
  it("returns an empty array if no employees", async () => {
    const employees = await getEmployees();
    expect(employees).toEqual([]);
  });

  it("returns employees from localStorage", async () => {
    localStorage.setItem(
      "employees",
      JSON.stringify([{ id: "1", firstName: "Alice" }]),
    );
    const employees = await getEmployees();
    expect(employees).toHaveLength(1);
    expect(employees[0].firstName).toBe("Alice");
  });
});

describe("deleteEmployeeById", () => {
  it("removes the correct employee", async () => {
    localStorage.setItem(
      "employees",
      JSON.stringify([
        { id: "1", firstName: "Alice" },
        { id: "2", firstName: "Bob" },
      ]),
    );
    await deleteEmployeeById("1");
    const employees = JSON.parse(localStorage.getItem("employees"));
    expect(employees).toHaveLength(1);
    expect(employees[0].firstName).toBe("Bob");
  });

  it("does not remove anything if id does not exist", async () => {
    localStorage.setItem(
      "employees",
      JSON.stringify([{ id: "1", firstName: "Alice" }]),
    );
    await deleteEmployeeById("999");
    const employees = JSON.parse(localStorage.getItem("employees"));
    expect(employees).toHaveLength(1);
  });
});

describe("updateEmployee", () => {
  it("updates the correct employee", async () => {
    localStorage.setItem(
      "employees",
      JSON.stringify([{ id: "1", firstName: "Alice", lastName: "Johnson" }]),
    );
    await updateEmployee({ id: "1", firstName: "Alicia", lastName: "Johnson" });
    const employees = JSON.parse(localStorage.getItem("employees"));
    expect(employees[0].firstName).toBe("Alicia");
  });

  it("does not modify other employees", async () => {
    localStorage.setItem(
      "employees",
      JSON.stringify([
        { id: "1", firstName: "Alice" },
        { id: "2", firstName: "Bob" },
      ]),
    );
    await updateEmployee({ id: "1", firstName: "Alicia" });
    const employees = JSON.parse(localStorage.getItem("employees"));
    expect(employees[1].firstName).toBe("Bob");
  });
});
