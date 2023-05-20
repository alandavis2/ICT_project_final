import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './EditBlogPage.css';

const EditBlogPage = ({ match }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  
  useEffect(() => {
    const blogPost = {
      title: 'Existing blog post',
      content: 'This is some existing content...'
    };
    setTitle(blogPost.title);
    setContent(blogPost.content);
  }, []); // Add dependencies if necessary

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleContentChange = (value) => {
    setContent(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically make a PUT or PATCH request to your API to update the existing blog post
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
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
}

export default EditBlogPage;

