


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <ActivityForm period="Weekly" />
    </div>
  );
}

function ActivityForm({ period }) {
  const [formData, setFormData] = useState({
    mon: 0,
    tue: 0,
    wed: 0,
    thu: 0,
    fri: 0,
    sat: 0,
    sun: 0,
    week1: 0,
    week2: 0,
    week3: 0,
    week4: 0,
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
    console.log('Form Submitted:', formData);

    try {
      const response = await fetch('http://localhost:3001/home', {
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
    <form onSubmit={handleFormSubmit} className="activity-form">
      <h4>{period} Activity</h4>
      {period === 'Weekly' ? (
        <>
          <label>
            Monday:
            <input
              type="number"
              name="mon"
              value={formData.mon}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Tuesday:
            <input
              type="number"
              name="tue"
              value={formData.tue}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Wednesday:
            <input
              type="number"
              name="wed"
              value={formData.wed}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Thursday:
            <input
              type="number"
              name="thu"
              value={formData.thu}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Friday:
            <input
              type="number"
              name="fri"
              value={formData.fri}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Saturday:
            <input
              type="number"
              name="sat"
              value={formData.sat}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Sunday:
            <input
              type="number"
              name="sun"
              value={formData.sun}
              onChange={handleInputChange}
            />
          </label>
        </>
      ) : (
        <>
          <label>
            Week 1:
            <input
              type="number"
              name="week1"
              value={formData.week1}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Week 2:
            <input
              type="number"
              name="week2"
              value={formData.week2}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Week 3:
            <input
              type="number"
              name="week3"
              value={formData.week3}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Week 4:
            <input
              type="number"
              name="week4"
              value={formData.week4}
              onChange={handleInputChange}
            />
          </label>
        </>
      )}
      <button type="submit">Update Chart</button>
    </form>
  );
}

