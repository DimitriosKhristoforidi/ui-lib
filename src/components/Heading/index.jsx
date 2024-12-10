import React from "react";
import "./index.css";

export const Heading = ({ level = 1, children, className }) => {
  const Tag = `h${level}`;

  return (
    <Tag className={`heading--${level} ${className ? className : ""}`}>
      {children}
    </Tag>
  );
};
