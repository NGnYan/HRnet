import "../styles/components/SelectField.css";

function SelectField({ label, name, value, onChange, options }) {
  return (
    <div className="select-field">
      {label && <label htmlFor={name}>{label}</label>}

      <select id={name} name={name} value={value} onChange={onChange}>
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
