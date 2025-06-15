import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h2>TechHub</h2>
        </div>
        <nav className="nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            About
          </NavLink>
          <NavLink 
            to="/user-info" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            User Info
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;