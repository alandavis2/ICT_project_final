import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-link" to="/home">Home</Link>
      <Link className="navbar-link" to="/add-blog">Add Blog</Link>
      <Link className="navbar-link" to="/">Logout</Link>
    </nav>
  );
}

export default Navbar;

