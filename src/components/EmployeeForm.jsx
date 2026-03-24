import { useState } from "react";
import { nameRegex, zipCodeRegex } from "../utils.js";
import { createEmployee } from "../employeeService.js";
import DateField from "./DateField.jsx";
import SelectField from "./SelectField.jsx";
import Modal from "./Modal.jsx";
import states from "../data/states.json";
import departments from "../data/departments.json";
import { useDispatch } from "react-redux";
import { addEmployee } from "../redux/employeesSlice.js";
import "../styles/components/EmployeeForm.css";

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
    department: "",
  };

  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "zipCode") {
      const onlyNumbers = value.replace(/\D/g, "");
      setForm((prev) => ({ ...prev, [name]: onlyNumbers }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const capitalizeWords = (text) =>
    text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const allFieldsFilled =
      form.firstName.trim() &&
      nameRegex.test(form.firstName.trim()) &&
      form.lastName.trim() &&
      nameRegex.test(form.lastName.trim()) &&
      form.dateOfBirth &&
      form.startDate &&
      form.street.trim() &&
      form.city.trim() &&
      nameRegex.test(form.city.trim()) &&
      form.state &&
      zipCodeRegex.test(form.zipCode) &&
      form.department;

    if (!allFieldsFilled) {
      setFormError("Please complete all required fields correctly.");
      return;
    }

    setFormError("");
    setSubmitted(false);

    const newEmployee = {
      ...form,
      id: crypto.randomUUID(),
      firstName: capitalizeWords(form.firstName.trim()),
      lastName: capitalizeWords(form.lastName.trim()),
      street: capitalizeWords(form.street.trim()),
      city: capitalizeWords(form.city.trim()),
    };

    await createEmployee(newEmployee);
    dispatch(addEmployee(newEmployee));

    setShowModal(true);
    setForm(initialState);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="employee-form">
        <div className="form-layout">
          <div className="form-section">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              className={`input-normal ${
                submitted &&
                (!form.firstName.trim() ||
                  !nameRegex.test(form.firstName.trim()))
                  ? "input-error"
                  : ""
              }`}
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              className={`input-normal ${
                submitted &&
                (!form.lastName.trim() || !nameRegex.test(form.lastName.trim()))
                  ? "input-error"
                  : ""
              }`}
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />

            <DateField
              label="Date of Birth"
              name="dateOfBirth"
              value={form.dateOfBirth}
              max={today}
              onChange={handleChange}
              className={submitted && !form.dateOfBirth ? "input-error" : ""}
            />

            <DateField
              label="Start Date"
              name="startDate"
              value={form.startDate}
              max={today}
              onChange={handleChange}
              className={submitted && !form.startDate ? "input-error" : ""}
            />
          </div>

          <div className="form-section">
            <label htmlFor="streetName">Street</label>
            <input
              id="streetName"
              className={`input-normal ${
                submitted && !form.street.trim() ? "input-error" : ""
              }`}
              name="street"
              value={form.street}
              onChange={handleChange}
            />

            <label htmlFor="cityName">City</label>
            <input
              id="cityName"
              className={`input-normal ${
                submitted &&
                (!form.city.trim() || !nameRegex.test(form.city.trim()))
                  ? "input-error"
                  : ""
              }`}
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
              className={submitted && !form.state ? "input-error" : ""}
            />

            <label htmlFor="zipCode">Zip Code</label>
            <input
              id="zipCode"
              className={`input-normal ${
                submitted && !zipCodeRegex.test(form.zipCode)
                  ? "input-error"
                  : ""
              }`}
              type="text"
              name="zipCode"
              value={form.zipCode}
              onChange={handleChange}
              maxLength={5}
              inputMode="numeric"
            />

            <SelectField
              label="Department"
              name="department"
              value={form.department}
              onChange={handleChange}
              options={departments}
              className={submitted && !form.department ? "input-error" : ""}
            />
          </div>
        </div>

        <div className="form-footer">
          {formError && <p className="form-error">{formError}</p>}
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
