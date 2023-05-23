import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboardPage.css';
import axios from 'axios';

function AdminDashboardPage() {
  const [blogs, setBlogs] = useState([]); 

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then(response => setBlogs(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleDeleteBlog = (id) => {
    axios.delete(`http://localhost:5000/api/blogs/${id}`)
      .then(response => {
        setBlogs(blogs.filter(blog => blog._id !== id));
      })
      .catch(error => console.log(error));
  }
  

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      {blogs.map(blog => (
        <div key={blog.id} className="blog-entry">
          <Link to={`/edit-blog/${blog.id}`} className="blog-title">{blog.title}</Link>
          <button onClick={() => handleDeleteBlog(blog.id)} className="delete-button">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboardPage;

