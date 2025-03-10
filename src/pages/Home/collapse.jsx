import React, { useState } from "react";
import arrowup from "../../assets/arrowup.png";
import arrowback from "../../assets/arrowback.png";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse-container">
      <button className="collapse-button" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
        <img
          src={isOpen ? arrowup : arrowback}
          alt="Flèche"
          className="collapse-arrow"
        />
      </button>

      <div className={`collapse-content ${isOpen ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
