


import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './ActivityChart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function ActivityChart() {
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [period, setPeriod] = useState('Monthly');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/getactivity-info');
      const result = await response.json();
      console.log('API Response:', result);

      const activityData = {
        mon: 0,
        tue: 0,
        wed: 0,
        thu: 0,
        fri: 0,
        sat: 0,
        sun: 0,
      };

   
      result.forEach((entry) => {
        activityData.mon += entry.mon || 0;
        activityData.tue += entry.tue || 0;
        activityData.wed += entry.wed || 0;
        activityData.thu += entry.thu || 0;
        activityData.fri += entry.fri || 0;
        activityData.sat += entry.sat || 0;
        activityData.sun += entry.sun || 0;
      });

      const weekly = [
        activityData.mon,
        activityData.tue,
        activityData.wed,
        activityData.thu,
        activityData.fri,
        activityData.sat,
        activityData.sun,
      ];

   
      const lastEntry = result[result.length - 1];
      const monthly = [
        lastEntry.mon || 0,
        lastEntry.tue || 0,
        lastEntry.wed || 0,
        lastEntry.thu || 0,
        lastEntry.fri || 0,
        lastEntry.sat || 0,
        lastEntry.sun || 0,
      ];

      console.log('Aggregated Weekly Data:', weekly);
      console.log('Latest Monthly Data:', monthly);

      setWeeklyData(weekly);
      setMonthlyData(monthly);
    } catch (e) {
      console.error('Error fetching data:', e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Activity',
        data: period === 'Weekly' ? weeklyData : monthlyData,
        backgroundColor: '#32CD32',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="activity-chart">
      <div className="chart-header">
        <h3 className="chart-title">Activity</h3>
        <select
          className="chart-select"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
      </div>
      <Bar data={chartData} options={options} />
    </div>
  );
}


