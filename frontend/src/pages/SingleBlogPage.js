import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleBlogPage.css';

function SingleBlogPage() {
  const { id } = useParams();
  const content =`Understanding the Code
  In this step we will explain the JavaScript code:
  
  randomNumber - is a variable and you can change this name as long as you type it correctly everywhere in the script.
  
  Math.floor(number) - The floor() method ROUNDS a number DOWNWARDS to the nearest integer, and returns the result. For example:
  
  Math.floor(0.2) returns 0
  Math.floor(6.9) returns 6
  Math.random() - returns a number between 0 and 1. In our case:
  
  Math.random()*4 returns a number between 0 and 3, and we need between 1 and 4 so you will add +1 at the end. For example:
  
  Math.random() returns 0.42362819185
  Math.random()*4+1 returns a number between 1 and 4
  Math.random()*10 returns a number between 0 and 9
  Math.random()*5+2 returns a number between 2 and 6
  window.onload = function() { // code }
  This will create a function, and when the page is being loaded all that code inside the function will run only once. If you refresh the page the code will run again, and so on.
  document.getElementById("content1").style.display = "inline";
  This function will get the element from your HTML document with the ID specified (in our case 'content1') and will set the CSS Style Property to "inline" or "none"!`;
  
  const blog = { id: id, title: 'Sample Blog', content: content };

  return (
    <div className="single-blog-container">
      <h1 className="single-blog-title">{blog.title}</h1>
      <p className="single-blog-content">{blog.content}</p>
    </div>
  );
}

export default SingleBlogPage;
