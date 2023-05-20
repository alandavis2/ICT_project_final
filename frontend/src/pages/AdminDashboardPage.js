import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboardPage.css';

function AdminDashboardPage() {
  const blogs = [{ id: 1, title: 'Blog 1' }, { id: 2, title: 'Blog 2' }]; // replace with read from db

  const handleDeleteBlog = (id) => {
    console.log(`Deleting blog with id: ${id}`);
    //add delete code here 
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

