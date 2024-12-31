
import './ProgressChart.css';
import React, { useState, useEffect } from 'react';

function Progress() {
  const [progressData, setProgressData] = useState([]);
  const [timeFrame, setTimeFrame] = useState('Weekly');
  const [aggregatedData, setAggregatedData] = useState({});
  const [latestData, setLatestData] = useState({});

 
  useEffect(() => {
    console.log('Fetching progress data...'); 
    fetch('http://localhost:3001/getprogress-info')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Raw API response:', data); 

      
        const latest = data[data.length - 1]; 
        setLatestData(latest);

       
        const aggregated = data.reduce((acc, activity) => {
      
          ['Cardiac', 'Stretching', 'Swimming', 'Treadmill'].forEach((key) => {
            acc[key] = (acc[key] || 0) + (activity[key] || 0);
          });
          return acc;
        }, {});

        setAggregatedData(aggregated);
      })
      .catch(error => {
        console.error('Error fetching data:', error); 
      });
  }, []);


  const calculateTotalHours = (data) => {
    return Object.values(data).reduce((total, value) => total + value, 0);
  };

  
  const totalHours = timeFrame === 'Weekly'
    ? Object.keys(latestData).filter(key => key !== '_id') 
        .reduce((total, key) => total + (latestData[key] || 0), 0)  
    : calculateTotalHours(aggregatedData); 

  console.log('Progress data:', progressData);
  console.log('Total hours:', totalHours);

  return (
    <div className="progress-container">
      <div className="progress-header">
        <h2>Progress</h2>
        <select
          className="select-time-frame"
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
        >
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>

      <div className="progress-content">
        <div className="progress-circle">
          <div className="circle-overlay"></div>
          <div className="circle-label">{totalHours} hrs</div>
        </div>

        <div className="activity-list">
         
          {(timeFrame === 'Weekly' ? [latestData] : [aggregatedData]).map((activity, index) => (
         
            Object.keys(activity).filter(key => key !== '_id').map((activityName, idx) => (
              <div key={idx} className="activity">
                <span
                  className="activity-icon"
                  style={{ backgroundColor: getActivityColor(activityName) }}
                ></span>
                <span className="activity-name">{activityName}</span>
                <span className="activity-time">{activity[activityName]} hrs</span>
              </div>
            ))
          ))}
        </div>
      </div>
    </div>
  );
}


const getActivityColor = (activity) => {
  const colors = {
    Cardiac: '#00c3a3',
    Stretching: '#ff7551',
    Swimming: '#d1a3e4',
    Treadmill: '#e4b84f',
  };
  return colors[activity] || '#ccc';
};

export default Progress;
