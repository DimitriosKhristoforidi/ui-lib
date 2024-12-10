import React, { useState } from "react";
import "./index.css";

export const Accordion = ({ children, title, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="accordion">
      <div className="accordion__title" onClick={toggleAccordion}>
        <span>{title}</span>
        <button>{isOpen ? "-" : "+"}</button>
      </div>
      {isOpen && <p className="accordion__content">{children}</p>}
    </div>
  );
};
