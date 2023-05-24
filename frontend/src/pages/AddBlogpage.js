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
