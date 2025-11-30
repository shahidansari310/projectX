import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/style.css'; // Import global styles

const Navbar = ({ isDashboard = false, userName = 'User' }) => {
  const location = useLocation();
  const getLinkClass = (path) => location.pathname === path ? 'active' : '';

  if (isDashboard) {
    return (
      <nav className="navbar">
        <div className="container">
          <div className="nav-wrapper">
            <div className="logo">
              <Link to="/">
                <span className="logo-icon">🏠</span>
                <span className="logo-text">PG<span className="highlight">Mate</span></span>
              </Link>
            </div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/pgs.html">Browse PGs</Link></li>
              <li><Link to="/owner-dashboard.html" className={getLinkClass('/owner-dashboard.html')}>Dashboard</Link></li>
              <li className="user-menu">
                <span className="user-avatar">👤</span>
                <span className="user-name">{userName}</span>
              </li>
            </ul>
            <div className="mobile-menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <Link to="/">
              <span className="logo-icon">🏠</span>
              <span className="logo-text">PG<span className="highlight">Mate</span></span>
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link to="/" className={getLinkClass('/')}>Home</Link></li>
            <li><Link to="/pgs.html" className={getLinkClass('/pgs.html')}>All PGs</Link></li>
            <li><Link to="/login.html">List Your PG</Link></li>
            <li><Link to="/login.html" className={`btn-login ${getLinkClass('/login.html')}`}>Login</Link></li>
          </ul>
          <div className="mobile-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;