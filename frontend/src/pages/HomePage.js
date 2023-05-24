import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div>
      <h1>Home Page</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog._id}>
            <Link to={`/blog/${blog._id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;


