
import React, { useState } from 'react';
import './Popupsetgoal.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Popupsetgoal = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Steps: '',
    Running: '',
    Sleep: '',
    targetWeight: '',
    water: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
  
 
    if (!formData.Steps || !formData.Running || !formData.Sleep || !formData.targetWeight || !formData.water) {
      alert("Please fill in all fields.");
      return;
    }

    if (isNaN(formData.Steps) || isNaN(formData.targetWeight) || isNaN(formData.water)) {
      alert("Please ensure that Steps, Weight, and Water are valid numbers.");
      return;
    }
  
    try {
      console.log("Sending data:", formData);
  
      
      const response = await axios.post("http://localhost:3001/goal", formData);
  
      
      if (response.status === 200) {
        alert("Goals saved successfully");
        navigate('/home'); 
      } else {
        alert("There was an error saving your goals.");
      }
    } catch (error) {
      console.error("Error saving goals:", error);
      alert("There was an error saving your goals. Please try again.");
    }
  };
  
  const handleCancel = () => {
    navigate('/set-profile'); 
  };
  const handlefullCancel = () => {
    navigate('/home'); 
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Set Your Goals</h2>
          <button className="close-button" onClick={handlefullCancel}>&times;</button>
        </div>
        <div className="modal-body">
          <form>
            <label>
              Steps per day:
              <input type="number" name="Steps" value={formData.Steps} onChange={handleChange} min="0" max="100000"/>
            </label>
            <label>
              Running per day (km):
              <input type="number" name="Running" value={formData.Running} onChange={handleChange}min="0" max="30" />
            </label>
            <label>
              Sleep per day (hrs):
              <input type="number" name="Sleep" value={formData.Sleep} onChange={handleChange} min="3" max="14"/>
            </label>
            <label>
              Target weight (kg):
              <input type="number" name="targetWeight" value={formData.targetWeight} onChange={handleChange} min="10" max="100" />
            </label>
            <label>
              Water intake (L):
              <input type="number" name="water" value={formData.water} onChange={handleChange}  min="2" max="8"/>
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

export default Popupsetgoal;
