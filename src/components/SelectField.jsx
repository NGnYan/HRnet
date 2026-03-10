import "../styles/components/SelectField.css";

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  className,
  placeholder = "-- Select --",
}) {
  return (
    <div className="select-field">
      {label && <label htmlFor={name}>{label}</label>}

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={`input-normal ${className || ""}`}
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option.value || option} value={option.value || option}>
            {option.label || option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;
