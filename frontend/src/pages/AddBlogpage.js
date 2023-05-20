import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; 
import './AddBlogPage.css';

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleContentChange = (value) => {
    setContent(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically make a POST request to your API to create a new blog post.
    console.log({ title, content });
    setTitle("");
    setContent("");
  }

  return (
    <div id='b'>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <br />
          <input type="text" value={title} onChange={handleTitleChange} required />
        </label>
        <br />
        <label>
          Content:
        </label>
        <ReactQuill value={content} onChange={handleContentChange} id='a'/>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
}

export default AddBlog;
