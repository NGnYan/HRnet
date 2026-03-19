import { createSlice } from "@reduxjs/toolkit";

const employeesSlice = createSlice({
  name: "employees",
  initialState: [],
  reducers: {
    setEmployees: (state, action) => action.payload,
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setEmployees, addEmployee } = employeesSlice.actions;
export default employeesSlice.reducer;
