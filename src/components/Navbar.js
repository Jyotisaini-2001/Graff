// Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from './logo.svg';
const Navbar = () => {
  return (
    <nav className="p-4 bg-gradient-to-r from-blue-500 to-teal-400">
    <div className=" mx-auto flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          <img src={logo} className="h-8 mr-4" alt="Logo" />
        </Link>
      </div>
  
      <div className="flex space-x-4">
        {/* Use NavLink to highlight the active link */}
        <NavLink
          to="/dashboard"
          className="text-white hover:text-gray-300"
          activeClassName="font-bold"
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/pricing"
          className="text-white hover:text-gray-300"
          activeClassName="font-bold"
        >
          Pricing
        </NavLink>
      </div>
    </div>
  </nav>
  
  );
};

export default Navbar;
