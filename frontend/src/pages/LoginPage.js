import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'arun' && password === '123@') {
      navigate('/admin-dashboard');
    } else {
      navigate('/home');
    }
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


