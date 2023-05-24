import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboardPage.css';

function AdminDashboardPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the blogs:", error);
      });
  }, []);

  const handleDeleteBlog = (id) => {
    if (!id) return;
  
    axios.delete(`/api/blogs/${id}`)
      .then(response => {
        console.log("Blog deleted");
        setBlogs(blogs.filter(blog => blog.id !== id));
      })
      .catch(error => console.error("Error deleting blog:", error));
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


