


import React, { useState, useEffect } from 'react';
import { Footprints, Droplets, Flame, Heart } from 'lucide-react';
import axios from 'axios';
import './Statsgrid.css';

const StatsGrid = () => {
  const [data, setData] = useState({
    steps: 0,
    water: 0,
    calories: 0,
    heartRate: 0,
  });
  const goal = 100000; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/data');
        console.log('API Response:', response.data); 

      
        if (response.data && response.data.length > 0) {
       
          const latestEntry = response.data[response.data.length - 1];
          console.log('Last Entry:', latestEntry);

         
          const { steps, wat: water, cal: calories, rate: heartRate } = latestEntry;
          console.log('Fetched Data:', { steps, water, calories, heartRate });

    
          setData({ steps, water, calories, heartRate });
        } else {
          console.error('No data found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const percentage = Math.min((data.steps / goal) * 100, 100);
  console.log('Steps Goal Percentage:', percentage); 

  return (
    <div className="stats-grid">
      <div className="stat-card green">
        <div className="stat-header">
          <Footprints size={20} />
          <span>Steps</span>
        </div>
        <div className="stat-value">{data.steps} Steps</div>
        <div className="progress-bar">
          <div
            className="progress green-progress"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="stat-footer">{percentage.toFixed(0)}% of your goal</div>
      </div>

      <div className="stat-card cyan">
  <div className="stat-header">
    <Droplets size={20} />
    <span>Water</span>
  </div>
  <div className="circle" >
    <span className="circle-text">{data.water} Liters</span>
  </div>
</div>


       <div className="stat-card orange">
        <div className="stat-header">
          <Flame size={20} />
          <span>Calories</span>
        </div>
        <div className="circle">
          <span className="circle-text">{data.calories} kcal</span>
        </div>
      </div>

      <div className="stat-card red">
        <div className="stat-header">
          <Heart size={20} />
          <span>Heart Rate</span>
        </div>
        <div className="heart-rate">
          <svg className="heart-rate-svg" viewBox="0 0 100 20">
            <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="white" strokeWidth="2" />
          </svg>
        </div>
        <div className="stat-footer">{data.heartRate} bpm</div>
      </div>
    </div>
  );
};

export default StatsGrid;
