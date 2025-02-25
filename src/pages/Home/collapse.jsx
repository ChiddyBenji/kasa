import React, { useState } from 'react';

function Collapse({ title, children }) { // ici collapse prend deux propriétés (props)
  const [isOpen, setIsOpen] = useState(false); // variable d'état isopen qui est défini sur false, setIsopen sert a mettre a jour celle-ci


  return (
    <div className="collapse-container">
      <button className="collapse-button" onClick={() => setIsOpen(!isOpen)}> {/* change isopen entre true et false au click */}
        <span>{title}</span>
        <span>{isOpen ? '▼' : '▲'}</span> {/* si isOpen est true, sinon false */}
      </button>

      <div className={`collapse-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;
