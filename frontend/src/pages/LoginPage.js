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

    axios.post('http://localhost:5001/api/users/login', {
      username,
      password
    })
      .then((response) => {
        if (response.status === 200) {
          
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

  const handleRegistration = () => {
    navigate('/register');
  }

  return (
    <div className="center">
      <br></br>
      <br></br>
      <form class="form">
        <p id="heading">Login</p>
        <div class="field">
          <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          </svg>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="login-input" />
        </div>
        <div class="field">
          <svg class="input-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          </svg>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="login-input" />
        </div>
        <div class="btn">
          <button type="submit" onClick={handleLogin} className="button1">Login</button>
          <button type="button" onClick={handleRegistration} className="button2">Register</button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
