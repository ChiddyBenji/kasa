import React from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/logo.png';


function Header() { 
  return (
    
    <div className="content-header">
      
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/about" className="nav-link">À propos</Link>
        </nav>
      </header>
      
    </div>
  );
}

export default Header;
