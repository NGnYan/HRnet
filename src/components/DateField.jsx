import "../styles/components/DateField.css";

function DateField({ label, name, value, onChange, className, max }) {
  return (
    <div className="date-field">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="date"
        id={name}
        name={name}
        value={value}
        max={max}
        onChange={onChange}
        className={`input-normal ${className || ""}`}
      />
    </div>
  );
}

export default DateField;
