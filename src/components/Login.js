import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        navigate('/expenses');
      })
      .catch(() => alert("❌ Invalid Credentials"));
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="title">🔐 Login</h2>

        <div className="input-group">
          <input type="text" name="username" onChange={handleChange} required />
          <label>Username</label>
        </div>

        <div className="input-group">
          <input type="password" name="password" onChange={handleChange} required />
          <label>Password</label>
        </div>

        <button type="submit" className="submit-btn">🚀 Login</button>
      </form>
    </div>
  );
}

export default Login;
