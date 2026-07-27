import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <h2>Talha</h2>
        <div className="links">
          <Link to="/">Home </Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Product">Product</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
