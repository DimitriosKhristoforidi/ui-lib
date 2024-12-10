import React from "react";
import "./index.css";

export const Typography = ({ children, textSize = "md", className }) => {
  return (
    <p className={`text text--${textSize} ${className ? className : ""}`}>
      {children}
    </p>
  );
};
