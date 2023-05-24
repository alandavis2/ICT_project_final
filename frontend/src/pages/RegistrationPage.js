import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './RegistrationPage.css';

function RegistrationPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5001/api/users', { username, password})
      .then(response => {
        console.log(response.data);
        alert("User registered successfully!");
        navigate('/login');
      })
      .catch(error => {
        console.error("There was an error registering the user:", error);
        alert("There was an error while registering the user. Please try again later.");
      });
  }

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleRegister} className="register-form">
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" className="register-input"/>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="register-input"/>
        <button type="submit" className="register-button">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;
