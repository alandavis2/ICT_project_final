import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import './EditBlogPage.css';

function EditBlogPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const blogPost = {
      title: 'Existing blog post',
      content: 'This is some existing content...'
    };

    setTitle(blogPost.title);
    setContent(blogPost.content);
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Edited Blog Title: ${title}`);
    console.log(`Edited Blog Content: ${content}`);
    navigate('/');
  };

  return (
    <div className="container">
      <h1>Edit Blog</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Title:
          <input type="text" className="input" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          Content:
          <textarea className="input" value={content} onChange={e => setContent(e.target.value)} />
        </label>
        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default EditBlogPage;

