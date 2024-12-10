import React from "react";
import "./index.css";

export const Tooltip = ({ children, text, position = "top" }) => {
  return (
    <div className={`tooltip tooltip--${position}`}>
      {children}
      <span className="tooltip-text">{text}</span>
    </div>
  );
};
