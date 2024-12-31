import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DataForm() {
  const [formData, setFormData] = useState({
    wat: "",
    step: "",
    cal: "",
    rate: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/value', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Data saved successfully:', data);
        navigate('/home'); 
      } else {
        console.error('Failed to save data:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="data-form">
      <label>
        Water Intake in ltr:
        <input
          type="number"
          name="wat"
          value={formData.wat}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Steps Walked:
        <input
          type="number"
          name="steps"
          value={formData.steps}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Calories Burned:
        <input
          type="number"
          name="cal"
          value={formData.cal}
          onChange={handleInputChange}
          required
        />
      </label>
      <label>
        Heart Rate (bpm):
        <input
          type="number"
          name="rate"
          value={formData.rate}
          onChange={handleInputChange}
          required
        />
      </label>
      <button type="submit">Update Chart</button>
    </form>
  );
}

export default DataForm;
