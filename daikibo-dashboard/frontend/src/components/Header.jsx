import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/Header.css';

function Header() {
  const { user, handleLogout } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">Daikibo</div>
        <h1>Machine Health Dashboard</h1>
      </div>
      <div className="header-right">
        <span className="user-info">{user?.name} ({user?.role})</span>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </header>
  );
}

export default Header;
