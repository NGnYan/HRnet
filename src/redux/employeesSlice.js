import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    setEmployees: (state, action) => action.payload,
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
    deleteEmployee: (state, action) => {
      return state.filter((employee) => employee.id !== action.payload);
    },
    updateEmployeeInStore: (state, action) => {
      return state.map((employee) =>
        employee.id === action.payload.id ? action.payload : employee,
      );
    },
  },
});

export const {
  setEmployees,
  addEmployee,
  deleteEmployee,
  updateEmployeeInStore,
} = employeesSlice.actions;
export default employeesSlice.reducer;
