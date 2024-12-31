import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

   
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/register", {
        username,
        email,
        password,
      });
      console.log("Registration Successful:", response.data);
      alert("Registration successful!");

     
      navigate("/");
    } catch (error) {
      console.error("Registration Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "An error occurred during registration");
    }
  };

  return (
    <div className="register-wrapper">
      
      <div className="background"></div>

    
      <div className="register-container">
   
        <div className="form-container">
          <div className="logo">
            <img src="img/image-2.png" alt="Crystal Delta Logo" />
          </div>
          <h2>Please Fill out the form to Register!</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit" className="register-btn">
              Register
            </button>
          </form>
          <p>
            Yes, I have an account? <a href="/">Login</a>
          </p>
        </div>

        
        <div className="image-container">
          <img src="img/Registerpageimage.png" alt="Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Register;
