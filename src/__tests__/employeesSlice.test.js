import { describe, it, expect } from "vitest";
import reducer, {
  setEmployees,
  addEmployee,
  deleteEmployee,
  updateEmployeeInStore,
} from "../redux/employeesSlice.js";

describe("setEmployees", () => {
  it("replaces the state with the payload", () => {
    const employees = [{ id: "1", firstName: "Alice" }];
    const result = reducer([], setEmployees(employees));
    expect(result).toEqual(employees);
  });
});

describe("addEmployee", () => {
  it("adds an employee to the list", () => {
    const employee = { id: "1", firstName: "Alice" };
    const result = reducer([], addEmployee(employee));
    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Alice");
  });
});

describe("deleteEmployee", () => {
  it("removes the correct employee", () => {
    const state = [
      { id: "1", firstName: "Alice" },
      { id: "2", firstName: "Bob" },
    ];
    const result = reducer(state, deleteEmployee("1"));
    expect(result).toHaveLength(1);
    expect(result[0].firstName).toBe("Bob");
  });

  it("does not remove anything if id does not exist", () => {
    const state = [{ id: "1", firstName: "Alice" }];
    const result = reducer(state, deleteEmployee("999"));
    expect(result).toHaveLength(1);
  });
});

describe("updateEmployeeInStore", () => {
  it("updates the correct employee", () => {
    const state = [{ id: "1", firstName: "Alice", lastName: "Johnson" }];
    const updated = { id: "1", firstName: "Alicia", lastName: "Johnson" };
    const result = reducer(state, updateEmployeeInStore(updated));
    expect(result[0].firstName).toBe("Alicia");
  });

  it("does not modify other employees", () => {
    const state = [
      { id: "1", firstName: "Alice" },
      { id: "2", firstName: "Bob" },
    ];
    const result = reducer(
      state,
      updateEmployeeInStore({ id: "1", firstName: "Alicia" }),
    );
    expect(result[1].firstName).toBe("Bob");
  });
});
