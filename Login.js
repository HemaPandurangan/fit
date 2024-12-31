


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Assets/logo.png';
import Illustration from '../Assets/illustration2.png';
import './Login.css';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLoginClick = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/login', { username, password });
      console.log('Login Successful:', response.data);
      alert('Login successful!');
      navigate('/Home');
    } catch (error) {
      console.error('Login Error:', error.response?.data || error.message);
      alert(error.response?.data?.message || 'An error occurred during login.');
    }
  };

  return (
    <div className="login-root">
      <div className="login-overlap">
        <div className="login-bg-1">
          <img src={Illustration} alt="Illustration" />
        </div>
        <div className="login-groups">
          <img className="login-image-2" src={Logo} alt="Logo" />
          <div className="login-text-wrapper-5">Welcome Back!</div>
          <div className="login-text-2">
            <input
              className="login-input-field"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              aria-label="Username"
            />
            <input
              className="login-input-field1"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              aria-label="Password"
            />
          </div>
          <button className="login-overlap-group-wrapper" onClick={handleLoginClick}>
            <div className="login-div-wrapper">Login</div>
          </button>
          <div className="login-button">
            <div className="login-div">
              <span className="login-don-t-have-and-a">Don't have an account?</span>
              <Link to="/Register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
















