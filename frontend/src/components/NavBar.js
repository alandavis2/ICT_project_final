import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './logo.jpg';  // import your logo

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/about">
        <img src={logo} alt="Logo" className="logo" />   {/* Add this */}
      </Link>

      <Link className="navbar-link" to="/home">Home</Link>
      <Link className="navbar-link" to="/add-blog">Add Blog</Link>
      <Link className="navbar-link" to="/">Logout</Link>
    </nav>
  );
}

export default Navbar;
