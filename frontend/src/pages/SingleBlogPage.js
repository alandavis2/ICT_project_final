import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './SingleBlogPage.css';
import axios from 'axios';

function SingleBlogPage({ match }) {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs/${match.params.id}`)
      .then(response => setBlog(response.data))
      .catch(error => console.log(error));
  }, [match.params.id]);

  return (
    <div className="single-blog-container">
      <h1 className="single-blog-title">{blog.title}</h1>
      <p className="single-blog-content">{blog.content}</p>
    </div>
  );
}

export default SingleBlogPage;
