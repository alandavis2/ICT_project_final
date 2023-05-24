import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5001/api/auth/login', {
      username,
      password
    })
    .then((response) => {
      if (response.status === 200) {
        // store the token in local storage, or in a cookie, or in memory depending on your needs
        localStorage.setItem('token', response.data.token);
        if (username === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/home');
        }
      } else {
        alert('Login failed. Please check your username and password.');
      }
    })
    .catch((error) => {
      console.log(error);
      alert('Login failed. Please check your username and password.');
    });
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="login-input"/>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="login-input"/>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;


