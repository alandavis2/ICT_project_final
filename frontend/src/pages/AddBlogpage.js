import React, { useState } from 'react';
import './AddBlogPage.css';

function AddBlogPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddBlog = (e) => {
    e.preventDefault();
    console.log(`Adding blog: ${title}`);
  }

  return (
    <div className="container">
      <h1>Add Blog</h1>
      <form onSubmit={handleAddBlog} className="form">
        <input className="input" type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <textarea className="input" value={content} onChange={e => setContent(e.target.value)} placeholder="Content" />
        <button className="button" type="submit">Add Blog</button>
      </form>
    </div>
  );
}

export default AddBlogPage;


