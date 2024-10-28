import React from "react";

const FormField = ({
  name,
  label,
  value,
  onChange,
  type = "text",
  options = [],
  disabled = false,
}) => {
  const renderInputField = () => (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={!disabled}
      className="bg-transparent border-0 border-b-2 block w-full p-3 text-sm text-black focus:outline-none border-[#32adff]"
    />
  );

  const renderSelectField = () => (
    <select
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required={!disabled}
      className="bg-transparent border-0 border-b-2 p-3 w-full text-sm text-black focus:outline-none border-[#32adff]"
    >
      <option value="">Seleccione una opción</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  const renderField = () => {
    switch (type) {
      case "select":
        return renderSelectField();
      case "date":
      case "text":
      default:
        return renderInputField();
    }
  };

  return (
    <div className="relative my-5 w-56">
      {renderField()}
      <label className="absolute top-0 left-0 pointer-events-none text-lg text-[#32adff] transform -translate-y-7">
        {label}
      </label>
    </div>
  );
};

export default FormField;
