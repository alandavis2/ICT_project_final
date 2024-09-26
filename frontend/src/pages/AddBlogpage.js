import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './AddBlogPage.css';
import axios from 'axios';

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

    const newBlog = {
      title,
      content
    };

    axios.post('http://localhost:5001/api/blogs', newBlog)
      .then(response => {
        console.log(response.data);
        alert("Blog post added successfully!");
        setTitle("");
        setContent("");
      })
      .catch(error => {
        console.error("There was an error creating the blog post:", error);
        alert("There was an error while adding the blog post. Please try again later.");
      });
  }

  return (
    <div id='b'>
      <br /><br /><br /><br />
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="Title" value={title} onChange={handleTitleChange} required />
        </label>
        <label>
          <span>Content:</span>
        </label>
        <div id='a' className="quill-container">
          <ReactQuill value={content} onChange={handleContentChange} />
        </div>
        <button type="submit">Add Blog</button>
      </form>
    </div>
  );
}

export default AddBlog;

