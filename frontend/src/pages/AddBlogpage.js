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
        <button type="submit" class="button">
          <span class="button__text">Add Item</span>
          <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
          </button>
      </form>
    </div>
  );
}

export default AddBlogPage;


