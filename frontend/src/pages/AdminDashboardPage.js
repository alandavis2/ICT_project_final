import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboardPage.css';

function AdminDashboardPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch the blogs from the backend API
    axios.get('http://localhost:5001/api/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the blogs:", error);
      });
  }, []);

  const handleDeleteBlog = (id) => {
    // Make a DELETE request to the backend API
    axios.delete(`http://localhost:5001/api/blogs/${id}`)
      .then(response => {
        console.log(`Deleted blog with id: ${id}`);
        // Remove the deleted blog from the local state
        setBlogs(blogs.filter(blog => blog.id !== id));
      })
      .catch(error => {
        console.error(`There was an error deleting the blog with id: ${id}`, error);
      });
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


