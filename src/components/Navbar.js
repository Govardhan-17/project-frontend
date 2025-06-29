import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="brand">💼 Expense Tracker</div>
      <button className="logout-btn" onClick={handleLogout}>🚪 Logout</button>
    </nav>
  );
}

export default Navbar;
