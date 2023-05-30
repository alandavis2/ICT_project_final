import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the blogs:', error);
      });
  }, []);

  return (
    <div className="homepage">
<<<<<<< Updated upstream
      <h1 className="head">Blog Lists</h1>
=======
      <br/><br/><br/><br/>
>>>>>>> Stashed changes
      <ul className="blog-list">
        {blogs.map(blog => (
          <li key={blog._id} className="blog-item">
            <div className="blog-card">
<<<<<<< Updated upstream
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-excerpt">{blog.content.slice(3, 153)}...</p>
=======
              <h2 className="blog-title">BLOG TITLE : {blog.title}</h2>
              <p className="blog-excerpt">{blog.content.slice(3, 153)}<Link to={`/blog/${blog._id}`} className="read-more-link">...</Link></p>
>>>>>>> Stashed changes
              <Link to={`/blog/${blog._id}`} className="read-more-link">Read more</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
