import { useState } from "react";
import "../styles/components/EmployeeForm.css";
import DateField from "./DateField.jsx";
import SelectField from "./SelectField.jsx";
import Modal from "./Modal.jsx";
import states from "../data/states.json";
import departments from "../data/departments.json";

function EmployeeForm() {
  const initialState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "Sales",
  };

  const [form, setForm] = useState(initialState);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((previousForm) => ({ ...previousForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(form);
    localStorage.setItem("employees", JSON.stringify(employees));
    setShowModal(true);
    setForm(initialState);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-layout">
          <div className="form-section">
            <label>First Name</label>
            <input
              className="input-normal"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />

            <label>Last Name</label>
            <input
              className="input-normal"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />

            <DateField
              label="Date of Birth"
              name="dateOfBirth"
              value={form.dateOfBirth}
              onChange={handleChange}
            />

            <DateField
              label="Start Date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
            />
          </div>

          <div className="form-section">
            <label>Street</label>
            <input
              className="input-normal"
              name="street"
              value={form.street}
              onChange={handleChange}
            />

            <label>City</label>
            <input
              className="input-normal"
              name="city"
              value={form.city}
              onChange={handleChange}
            />

            <SelectField
              label="State"
              name="state"
              value={form.state}
              onChange={handleChange}
              options={states.map((state) => ({
                value: state.abbreviation,
                label: state.name,
              }))}
            />

            <label>Zip Code</label>
            <input
              className="input-normal"
              type="number"
              name="zipCode"
              value={form.zipCode}
              onChange={handleChange}
            />

            <SelectField
              label="Department"
              name="department"
              value={form.department}
              onChange={handleChange}
              options={departments}
            />
          </div>
        </div>

        <div className="form-footer">
          <button type="submit" className="save-btn">
            Save
          </button>
        </div>
      </form>

      {showModal && (
        <Modal
          message="Employee Created!"
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default EmployeeForm;
