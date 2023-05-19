import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboardPage.css';

function AdminDashboardPage() {
  // Here you would typically fetch the list of blogs from an API
  const blogs = [{ id: 1, title: 'Blog 1' }, { id: 2, title: 'Blog 2' }];

  const handleDeleteBlog = (id) => {
    // Here you would typically make a DELETE request to an API to delete the blog
    console.log(`Deleting blog with id: ${id}`);
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

