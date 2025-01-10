import React from 'react';
import { Home, Activity, MessageSquare, Calendar, Settings, LogOut,ChartPie} from 'lucide-react';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    
    navigate('/');
  };

  const navigateToActivityForm = () => {
    navigate('/activity'); 
  };

 const navigateTodataForm=()=>{
  navigate('/data');
 };

  const navigateToProgressForm = () => {
    navigate('/progress');
  };
  return (
    <div className="sidebar">
      <div className="logo">
        <span className="logo-text">H</span>
      </div>
      <nav className="nav">
        <a href="#" className="nav-link"><Home size={20} /></a>
        <a href="activity" className="nav-link" onClick={navigateToActivityForm}><Activity size={20} /></a>
      
        <a href="#" className="nav-link" onClick={navigateToProgressForm}><ChartPie size={20} /></a>
        <a href="#" className="nav-link"><MessageSquare size={20} /></a>
        <a href="#" className="nav-link"onClick={navigateTodataForm}><Calendar size={20} /></a>
        <a href="#" className="nav-link" ><Settings size={20} /></a>
       
      </nav>
      <div className="logout">
        <button className="logout-button" onClick={handleLogout}><LogOut size={20} /></button>
      </div>
    </div>
  );
}


