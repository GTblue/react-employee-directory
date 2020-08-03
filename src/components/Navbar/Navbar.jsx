import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-secondary">
        <Link to="/" className="navbar-brand text-warning">employeeDirectory</Link>
      </nav>
    </div>
  );
};

export default Navbar;
