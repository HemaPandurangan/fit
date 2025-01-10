
import React, { useState, useEffect } from "react";
import { Footprints, Droplets, Flame, Heart } from "lucide-react";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Statsgrid.css";

const StatsGrid = () => {
  const [data, setData] = useState({
    steps: 0,
    water: 0,
    calories: 0,
    heartRate: 0,
  });
  const stepGoal = 100000; 
  const waterGoal = 8; 
  const cal=5678;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/data");
        console.log("API Response:", response.data);

        if (response.data && response.data.length > 0) {
          const latestEntry = response.data[response.data.length - 1];
          console.log("Last Entry:", latestEntry);

          const { steps, wat: water, cal: calories, rate: heartRate } = latestEntry;
          console.log("Fetched Data:", { steps, water, calories, heartRate });

          setData({ steps, water, calories, heartRate });
        } else {
          console.error("No data found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const stepPercentage = Math.min((data.steps / stepGoal) * 100, 100);
  const waterPercentage = Math.min((data.water / waterGoal) * 100, 100);

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
            style={{ width: `${stepPercentage}%` }}
          ></div>
        </div>
        <div className="stat-footer">{stepPercentage.toFixed(0)}% of your goal</div>
      </div>

   
      <div className="stat-card cyan">
        <div className="stat-header">
          <Droplets size={20} />
          <span>Water</span>
        </div>
        <div className="circle">
          <CircularProgressbar
            value={waterPercentage}
            text={`${data.water}L`}
            styles={buildStyles({
              textSize: "16px",
              pathColor: "#22d3ee", 
              textColor: "#333",
              trailColor: "#eee",
            })}
          />
        </div>
        <div className="stat-footer">{waterPercentage.toFixed(0)}% of your goal</div>
      </div>

      <div className="stat-card orange">
  <div className="stat-header">
    <Flame size={20} />
    <span>Calories</span>
  </div>
  <div className="circle">
    <CircularProgressbar
      value={(data.calories / cal) * 100} 
      text={`${data.calories} kcal`}
      styles={buildStyles({
        textSize: "16px",
        pathColor: "#eee", 
        textColor: "#333",
        trailColor: "#fb923c",
      })}
    />
  </div>
  <div className="stat-footer">
    {(Math.min((data.calories / 2500) * 100, 100)).toFixed(0)}% of your goal
  </div>
</div>

     
      <div className="stat-card red">
  <div className="stat-header">
    <Heart size={20} />
    <span>Heart Rate</span>
  </div>
  <div className="heart-rate">
    <svg className="heart-rate-svg" viewBox="0 0 100 20">
      <path
        d={`M0,10 
          Q25,${10 - Math.min(data.heartRate / 20, 8)} 
          50,10 
          T100,10`}
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  </div>
  <div className="stat-footer">{data.heartRate} bpm</div>
</div>
    </div>
  );
};

export default StatsGrid;
