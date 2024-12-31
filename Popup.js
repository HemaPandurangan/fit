import React, { useState } from 'react';
import './Popup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const Popup = ({ onClose }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    location: '',
    dateOfBirth: '',
    height: '',
    weight: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCancel = () => {
    navigate('/home'); 
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.location || !formData.dateOfBirth || !formData.height || !formData.weight) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      console.log("Sending data:", formData);
      const response = await axios.post("http://localhost:3001/popup", formData);
      console.log("Response data:", response);

      if (response.status === 200) {
        navigate('/set-goal'); 
      } else {
        console.error("Unexpected response status:", response.status);
        alert("There was an error saving your profile. Please try again.");
      }
    } catch (error) {
      console.error("Error saving profile:", error);
      alert("There was an error saving your profile. Please try again.");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Set your profile</h2>
          <button className="close-button" onClick={handleCancel}>&times;</button>
        </div>
        <div className="modal-body">
          <form>
            <label>
              Full Name
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
            </label>
            <label>
              Your Location
              <input type="text" name="location" value={formData.location} onChange={handleChange} />
            </label>
            <label>
  Date of Birth
  <input 
    type="date" 
    name="dateOfBirth" 
    value={formData.dateOfBirth} 
    onChange={handleChange} 
    min="01-01-1970" 
    max={new Date().toISOString().split("T")[0]} 
  />
</label>

            <label>
              Your Height in cm
              <input type="number" name="height" value={formData.height} onChange={handleChange} min="50" max="250"/>
            </label>
            <label>
              Your Weight in kg
              <input type="number" name="weight" value={formData.weight} onChange={handleChange}   min="10"    
    max="200"   />
            </label>
          </form>
        </div>
        <div className="modal-footer">
          <button className="cancel-button" onClick={handleCancel}>Cancel</button>
          <button className="save-button" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};
export default Popup;