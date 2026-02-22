import "../styles/components/DateField.css";

function DateField({ label, name, value, onChange }) {
  return (
    <div className="date-field">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="date"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default DateField;
