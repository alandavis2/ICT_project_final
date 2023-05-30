import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboardPage.css';

function AdminDashboardPage() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5001/api/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the blogs:", error);
        setError("There was an error fetching the blogs.");
      });
  }, []);

  const handleDeleteBlog = (id) => {
    if (!id) return;

    axios.delete(`http://localhost:5001/api/blogs/${id}`)
      .then(response => {
        setMessage("Blog deleted successfully");
        setBlogs(blogs.filter(blog => blog._id !== id));
      })
      .catch(error => {
        console.error("Error deleting blog:", error);
        setError("Error deleting blog.");
      });
  }

  return (
    <div className="dashboard">
<<<<<<< Updated upstream
=======
      <br/><br/><br/>
>>>>>>> Stashed changes
      <h1 className="dashboard-title">Admin Dashboard</h1>
      {error && <p className="error-message">{error}</p>}
      {message && <p className="success-message">{message}</p>}
      {blogs.map(blog => (
        <div key={blog._id} className="blog-entry">
          <div className="blog-title">
            <Link to={`/edit-blog/${blog._id}`} className="blog-link">{blog.title}</Link>
          </div>
          <button onClick={() => handleDeleteBlog(blog._id)} className="delete-button">Delete</button>
          <button className="edit-button"><Link to={`/edit-blog/${blog._id}`} className="edit-link">Edit</Link></button>
        </div>
      ))}
    </div>
  );
}

export default AdminDashboardPage;
