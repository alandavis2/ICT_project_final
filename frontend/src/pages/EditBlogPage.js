import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './EditBlogPage.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditBlogPage = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5001/api/blogs/${id}`)
      .then(response => {
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch(error => {
        console.error("There was an error fetching the blog post:", error);
      });
  }, [id]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleContentChange = (value) => {
    setContent(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5001/api/blogs/${id}`, { title, content })
      .then(response => {
        console.log(response.data);
        alert("Blog post updated successfully!");
      })
      .catch(error => {
        console.error("There was an error updating the blog post:", error);
        alert("There was an error while updating the blog post. Please try again later.");
      });
  }

  return (
    <div id='b'>

      <br/><br/><br/><br/>

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
        <div id ='a' className="quill-container">
          <ReactQuill value={content} onChange={handleContentChange} />
        </div>
        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
}

export default EditBlogPage;
