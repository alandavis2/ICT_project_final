import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './logo.jpg';

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-fixed">
        <Link to="/home" className="logo-link">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="logo-text">LearnBlog</h1>
          </div>
        </Link>

        <div className="tabs">
          <button className="tab">
            <Link to="/home" className="navbar-link" id='ad'>Home</Link>
          </button>

          <button className="tab">
            <Link to="/add-blog" className="navbar-link" id='ad'>Add Blog</Link>
          </button>
          <button className="tab">
            <Link to="/admin-dashboard" className="navbar-link" id='ad'>Admin DB</Link>
            </button>

          <button className="tab">
            <Link to="/" className="navbar-link" id='ad'>Logout</Link>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
