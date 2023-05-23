import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './EditBlogPage.css';
import axios from 'axios';

const EditBlogPage = ({ match }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    // Fetch the current blog post using its id
    axios.get(`http://localhost:5000/api/blogs/${match.params.id}`)
      .then(response => {
        setTitle(response.data.title);
        setContent(response.data.content);
      })
      .catch(error => {
        console.error("There was an error fetching the blog post:", error);
      });
  }, [match.params.id]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleContentChange = (value) => {
    setContent(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a PUT request to update the existing blog post
    axios.put(`http://localhost:5000/api/blogs/${match.params.id}`, { title, content })
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


