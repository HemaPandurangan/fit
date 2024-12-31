


import React from 'react';
import { Bell } from 'lucide-react';
import './Header.css'; 

export default function Header() {
  return (
    <div className="header">
      <div>
        <span className="greeting">Good Morning</span>
        <h1 className="welcome">Welcome Back 👋</h1>
      </div>
      <div className="actions">
        <button className="subscribe-button">
          Subscribe
        </button>
        <button className="bell-button">
          <Bell size={20} />
        </button>
      </div>
    </div>
  );
}
