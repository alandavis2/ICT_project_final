import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from './logo.jpg';  // import your logo

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
            <Link className="tab" to="/home">Home</Link>
          </button>


          <button className="tab">
            <Link className="tab" to="/add-blog">Add Blog</Link>
          </button>

          <button className="tab">
            <Link className="tab" to="/">Logout</Link>
          </button>


          <span className="glider"></span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

