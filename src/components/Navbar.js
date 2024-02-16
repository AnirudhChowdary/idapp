import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" exact className={({ isActive }) => isActive ? "active" : ""}>
        HOME
      </NavLink>
      <NavLink to="/work" className={({ isActive }) => isActive ? "active" : ""}>
        WORK
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
        ABOUT
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
        GET IN TOUCH
      </NavLink>
    </nav>
  );
};

export default Navbar;
