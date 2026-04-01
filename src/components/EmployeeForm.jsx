import { useState } from "react";
import { nameRegex, zipCodeRegex } from "../utils.js";
import { createEmployee, updateEmployee } from "../employeeService.js";
import DateField from "./DateField.jsx";
import SelectField from "./SelectField.jsx";
import Modal from "./Modal.jsx";
import states from "../data/states.json";
import departments from "../data/departments.json";
import { useDispatch } from "react-redux";
import {
  addEmployee,
  updateEmployeeInStore,
  deleteEmployee,
} from "../redux/employeesSlice.js";
import "../styles/components/EmployeeForm.css";

function EmployeeForm({ employee = null }) {
  const initialState = employee || {
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
  const [errors, setErrors] = useState({});
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

  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName.trim() || !nameRegex.test(form.firstName.trim())) {
      newErrors.firstName = "Please enter a valid first name";
    }
    if (!form.lastName.trim() || !nameRegex.test(form.lastName.trim())) {
      newErrors.lastName = "Please enter a valid last name";
    }
    if (!form.dateOfBirth) {
      newErrors.dateOfBirth = "Please enter a date of birth";
    }
    if (!form.startDate) {
      newErrors.startDate = "Please enter a start date";
    }
    if (!form.street.trim()) {
      newErrors.street = "Please enter a street";
    }
    if (!form.city.trim() || !nameRegex.test(form.city.trim())) {
      newErrors.city = "Please enter a valid city";
    }
    if (!form.state) {
      newErrors.state = "Please select a state";
    }
    if (!zipCodeRegex.test(form.zipCode)) {
      newErrors.zipCode = "Please enter a valid zip code";
    }
    if (!form.department) {
      newErrors.department = "Please select a department";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setErrors({});

    const newEmployee = {
      ...form,
      id: employee ? employee.id : crypto.randomUUID(),
      firstName: capitalizeWords(form.firstName.trim()),
      lastName: capitalizeWords(form.lastName.trim()),
      street: capitalizeWords(form.street.trim()),
      city: capitalizeWords(form.city.trim()),
    };

    if (employee) {
      try {
        dispatch(updateEmployeeInStore(newEmployee));
        await updateEmployee(newEmployee);
      } catch (error) {
        dispatch(updateEmployeeInStore(employee));
        console.error("Failed to update employee", error);
      }
    } else {
      try {
        dispatch(addEmployee(newEmployee));
        await createEmployee(newEmployee);
      } catch (error) {
        dispatch(deleteEmployee(newEmployee.id));
        console.error("Failed to create employee", error);
      }
    }

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
              className={`input-normal ${errors.firstName ? "input-error" : ""}`}
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="field-error">{errors.firstName}</p>
            )}

            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              className={`input-normal ${errors.lastName ? "input-error" : ""}`}
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="field-error">{errors.lastName}</p>
            )}

            <DateField
              label="Date of Birth"
              name="dateOfBirth"
              value={form.dateOfBirth}
              max={today}
              onChange={handleChange}
              className={errors.dateOfBirth ? "input-error" : ""}
            />
            {errors.dateOfBirth && (
              <p className="field-error">{errors.dateOfBirth}</p>
            )}

            <DateField
              label="Start Date"
              name="startDate"
              value={form.startDate}
              max={today}
              onChange={handleChange}
              className={errors.startDate ? "input-error" : ""}
            />
            {errors.startDate && (
              <p className="field-error">{errors.startDate}</p>
            )}
          </div>

          <div className="form-section">
            <label htmlFor="streetName">Street</label>
            <input
              id="streetName"
              className={`input-normal ${errors.street ? "input-error" : ""}`}
              name="street"
              value={form.street}
              onChange={handleChange}
            />
            {errors.street && <p className="field-error">{errors.street}</p>}

            <label htmlFor="cityName">City</label>
            <input
              id="cityName"
              className={`input-normal ${errors.city ? "input-error" : ""}`}
              name="city"
              value={form.city}
              onChange={handleChange}
            />
            {errors.city && <p className="field-error">{errors.city}</p>}

            <SelectField
              label="State"
              name="state"
              value={form.state}
              onChange={handleChange}
              options={states.map((state) => ({
                value: state.abbreviation,
                label: state.name,
              }))}
              className={errors.state ? "input-error" : ""}
            />
            {errors.state && <p className="field-error">{errors.state}</p>}

            <label htmlFor="zipCode">Zip Code</label>
            <input
              id="zipCode"
              className={`input-normal ${errors.zipCode ? "input-error" : ""}`}
              type="text"
              name="zipCode"
              value={form.zipCode}
              onChange={handleChange}
              maxLength={5}
              inputMode="numeric"
            />
            {errors.zipCode && <p className="field-error">{errors.zipCode}</p>}

            <SelectField
              label="Department"
              name="department"
              value={form.department}
              onChange={handleChange}
              options={departments}
              className={errors.department ? "input-error" : ""}
            />
            {errors.department && (
              <p className="field-error">{errors.department}</p>
            )}
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
          message={employee ? "Employee updated!" : "Employee created!"}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default EmployeeForm;
