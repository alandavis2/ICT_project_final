import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the blog from the backend based on the ID in the URL params
    axios.get(`http://localhost:5001/api/blogs/${id}`)
      .then(response => {
        setBlog(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the blog:', error);
      });
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
}

export default SingleBlogPage;