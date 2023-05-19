import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  const blogs = [{ id: 1, title: 'Blog 1' }, { id: 2, title: 'Blog 2' }];//to be changed with Backend code to access data from database
  
  return (
    <div className="container">
      <h1>Home Page</h1>
      <div className="blogs">
        {blogs.map(blog => (
          <Link className="blog-link" key={blog.id} to={`/blog/${blog.id}`}>{blog.title}</Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

