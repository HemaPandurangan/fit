import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProgressForm() {
  const [formData, setFormData] = useState({
    Cardiac: 0,
    Stretching: 0,
    Swimming: 0,
    Treadmill: 0,
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parseInt(value, 10) || 0,
    }));
  };



  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('Form Submitted:', formData);

    try {
      const response = await fetch('http://localhost:3001/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.status === 200) {
        console.log('Profile saved successfully:', data);

        navigate('/home');
      } else {
        console.error('Error saving profile:', data);
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };



  return (
    <div className="form-container">
      <h1>Progress Form</h1>
      <form onSubmit={handleFormSubmit} className="progress-form">
        <label>
          Cardiac:
          <input
            type="number"
            name="Cardiac"
            value={formData.Cardiac}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Stretching:
          <input
            type="number"
            name="Stretching"
            value={formData.Stretching}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Swimming:
          <input
            type="number"
            name="Swimming"
            value={formData.Swimming}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Treadmill:
          <input
            type="number"
            name="Treadmill"
            value={formData.Treadmill}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Update Chart</button>
      </form>
    </div>
  );
}




