import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import axios from 'axios';

function HomePage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.log(error));
  }, []);
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

