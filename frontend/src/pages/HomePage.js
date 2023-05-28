import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/blogs')
      .then(response => {
        // sort by created_at in ascending order and then take the first 20
        const sortedBlogs = response.data.sort((a, b) => new Date(a.created_at) - new Date(b.created_at)).slice(0, 20);
        setBlogs(sortedBlogs);
      })
      .catch(error => {
        console.error('There was an error fetching the blogs:', error);
      });
  }, []);

  return (
    <div>
      <br />
      <h1 className='head'>Blog lists</h1>
      <br />
      <ul>
        {blogs.map(blog => (
          <li key={blog._id}>
            <div class="card">
              <div class="content">
                <h1 class="heading">
                  {blog.title}
                  <br />
                  <button class="btn"><Link to={`/blog/${blog._id}`}>Read more</Link></button>
                </h1>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div >
  );
}

export default HomePage;



