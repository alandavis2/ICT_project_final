import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './SingleBlogPage.css';

const SingleBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5001/api/blogs/${id}`)
      .then(response => {
        setBlog(response.data);

      })
      .catch(error => {
        console.error('There was an error fetching the blog:', error);
      });
  }, [id]);

  if (!blog) {
    return <div>Not Found</div>;
  }

  return (
    <div id="b" className="single-blog-container" >
      <div className="blog-content" style={{ color: 'black', border: '2px solid black', padding: '20px', backgroundColor: 'white' }}>
        <h1>{blog.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>



  );
}

export default SingleBlogPage;
