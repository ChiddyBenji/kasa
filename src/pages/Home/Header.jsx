import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <div className="content-header">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <nav className="nav-links">
          <NavLink to="/" className="nav-link">
            Accueil
          </NavLink>
          <NavLink to="/about" className="nav-link">
            À propos
          </NavLink>
        </nav>
      </header>
    </div>
  );
}

export default Header;
