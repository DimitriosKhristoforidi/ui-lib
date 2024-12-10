import React from "react";
import "./index.css";

export const Input = ({
  type = "text",
  placeholder = "",
  value,
  onChange = () => {},
  disabled = false,
  label = "",
  danger = false,
}) => {
  return (
    <label className={`label ${danger ? "label--danger" : ""}`}>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`input ${danger ? "input--danger" : ""}`}
      />
    </label>
  );
};
