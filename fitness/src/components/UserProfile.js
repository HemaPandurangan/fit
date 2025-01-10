

import { Power } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import './UserProfile.css';
import Popupsetgoal from './Popupsetgoal';
import axios from 'axios'; 
import Popup from './Popup';

export default function UserProfile() {
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const [isGoalPopupOpen, setIsGoalPopupOpen] = useState(false);
 
  const [fullName, setFullName] = useState('');
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [location, setLocation] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState(0);

  const [runningGoal, setRunningGoal] = useState("0km");
  const [sleepingGoal, setSleepingGoal] = useState("0hrs");
  const [weightLossGoal, setWeightLossGoal] = useState("0kg");

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    axios.get('http://localhost:3001/get-goal')
      .then(response => {
        const goalsData = response.data; 
        if (goalsData.length) {
          const goal = goalsData[goalsData.length - 1];  
  

          setRunningGoal(goal.Running || "0km");
          setSleepingGoal(goal.Sleep || "0hrs");
          setWeightLossGoal(goal.targetWeight || "0kg");
        }
      })
      .catch(error => console.error('Error fetching goals data:', error));
  }, []);
  

  useEffect(() => {
    axios.get('http://localhost:3001/get-popup')
      .then(response => {
        const profileData = response.data;
        const latestProfile = profileData[profileData.length - 1]; 

        setFullName(latestProfile?.fullName || ''); 
        setWeight(latestProfile?.weight || 0);
        setHeight(latestProfile?.height || 0);
        setLocation(latestProfile?.location || '');
        setDateOfBirth(latestProfile?.dateOfBirth || '');

        if (latestProfile?.dateOfBirth) {
          setAge(calculateAge(latestProfile?.dateOfBirth)); 
        }
      })
      .catch(error => console.error('Error fetching profile data:', error));
  }, []);

  const handleEditClick = () => {
    setIsPopupOpen(true); 
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); 
    setIsGoalPopupOpen(false);
  };
  
  const handleSwitchToGoal = () => {
    setIsPopupOpen(false); 
    setIsGoalPopupOpen(true); 
  };
  
  const handleSwitchToProfile = () => {
    setIsGoalPopupOpen(false); 
    setIsPopupOpen(true); 
  };
  
  const handleSaveProfile = (formData) => {
    axios.post('/popup', formData)
      .then(response => {
        setFullName(formData.fullName || '');
        setWeight(formData.weight || 0);
        setHeight(formData.height || 0);
        setLocation(formData.location || '');
        setDateOfBirth(formData.dateOfBirth || '');

        setIsPopupOpen(false);
        setIsGoalPopupOpen(true);
      })
      .catch(error => {
        console.error('Error saving data:', error);
        alert('Error saving profile data!');
      });
  };

  const isProfileComplete = fullName && weight && height && location && dateOfBirth;

  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width:"600px"
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "800px",
            padding: "20px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
 
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <div
                style={{
                  height: "45px",
                  width: "40px",
                  borderRadius: "50%",
                  backgroundColor: "#e0e0e0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  style={{ height: "24px", width: "24px", color: "#808080" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h2 style={{ fontWeight: "600", color: "#333", fontSize: "16px", margin: 0 }}>
                  {fullName || 'Hemajeyasri'}
                </h2>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                    color: "#666",
                    marginTop: "4px",
                  }}
                >
                  <span style={{ marginRight: "5px", color: "#ff007f" }}>📍</span>
                  <span>{location || 'Location'}</span>
                </div>
              </div>
            </div>
            <div
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50%",
                backgroundColor: "#e0e0e0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Link to="/">
                <Power style={{ height: "24px", width: "24px", color: "#333" }} />
              </Link>
            </div>
          </div>

        
          <div
            style={{
              marginBottom: "20px",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              overflow: "hidden",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#333" }}>
                {100 || 0}%
              </span>

              <button
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#e5fb8f",
                  border: "none",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "500",
                  color: "#333",
                }}
              >
                <Link to="/set-Profile" style={{ textDecoration: "none", color: "#333" }} onClick={handleEditClick}>
                  Edit your Profile
                </Link>
              </button>
            </div>
            <p style={{ fontSize: "12px", color: "#999" }}>
              {isProfileComplete ? "Your profile is complete" : "Your profile is not complete"}
            </p>
          </div>

        
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              overflow: "hidden",
            }}
          >
            {[{ label: "Weight", value: weight, unit: "kg" }, { label: "Height", value: height }, { label: "Age", value: age, unit: "yrs" }]
              .map((stat, index) => (
                <div key={index} style={{ textAlign: "center" }}>
                  <p style={{ fontSize: "20px", fontWeight: "700", color: "#333" }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: "12px", color: "#666" }}>{stat.label}</p>
                  {stat.unit && (
                    <p style={{ fontSize: "10px", color: "#999" }}>{stat.unit}</p>
                  )}
                </div>
              ))}
          </div>

          <div
            style={{
              marginBottom: "20px",
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              overflow: "hidden",
            }}
          >
            <h3 style={{ fontWeight: "bolder", color: "#333", marginBottom: "10px" }}>
              Your Goals
            </h3>
            {[{ label: "Running in km", value: runningGoal ,icon:"🏃"}, { label: "Sleeping  in hr", value: sleepingGoal ,  icon: "😴" }, { label: "Weight Loss in kg", value: weightLossGoal, icon: "🔥"  }]
              .map((goal, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <div
                    style={{
                      height: "80px",
                      width: "80px",
                      borderRadius: "10px",
                      backgroundColor: "#e0f7ff",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                      marginTop: "40px",
                    }}
                  >
                
                <span style={{ fontSize: "30px" }}>{goal.icon}</span>
                  </div>
                  <div>
                    <p style={{ fontWeight: "500", color: "#333" }}>{goal.label}</p>
                    <p style={{ fontSize: "12px", color: "#666" }}>{goal.value}</p>
                  </div>
                </div>
              ))}
          </div>

       
          <div
            style={{
              padding: "10px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
              overflow: "hidden",
              marginTop: "40px",
            }}
          >
            <h3 style={{ fontWeight: "600", color: "#333", marginBottom: "10px" }}>
              Scheduled
            </h3>
            {[{ label: "Training - Yoga Class", category: "Fitness", date: "22 Mar 2025", icon: "🧘" },
            { label: "Training - Swimming", category: "Fitness", date: "22 Mar 2025", icon: "🏊" }]
              .map((activity, index) => (
                <div key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        height: "70px",
                        width: "70px",
                        borderRadius: "10px",
                        backgroundColor: "#f3e5f5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {activity.icon}
                    </div>
                    <div>
                      <p style={{ fontWeight: "500", color: "#333" }}>{activity.label}</p>
                      <p style={{ fontSize: "12px", color: "#666" }}>{activity.category}</p>
                    </div>
                  </div>
                  <p style={{ fontSize: "12px", color: "#666" }}>{activity.date}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      {isPopupOpen && <Popup onClose={handleClosePopup} onSave={handleSaveProfile} />}
      {isGoalPopupOpen && <Popupsetgoal onClose={handleSwitchToProfile} />}
    </div>
  );
}
