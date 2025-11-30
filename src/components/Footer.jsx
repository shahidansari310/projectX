import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css'; 

const Footer = ({ hasCreatorInfo = true }) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3>About PGFinder</h3>
            <p>Your trusted platform for finding comfortable and affordable PG accommodations{hasCreatorInfo && ' across major cities in India'}.</p>
          </div>
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/pgs">Browse PGs</Link></li>
              <li><Link to="/login">List Your PG</Link></li>
              <li><Link to="#">About Us</Link></li>
              {hasCreatorInfo && <li><Link to="#">Contact</Link></li>}
            </ul>
          </div>
          <div className="footer-col">
            <h3>Popular Cities</h3>
            <ul>
              <li><Link to="/pgs">Bangalore</Link></li>
              <li><Link to="/pgs">Mumbai</Link></li>
              <li><Link to="/pgs">Delhi</Link></li>
              {hasCreatorInfo && <li><Link to="/pgs">Pune</Link></li>}
            </ul>
          </div>
          <div className="footer-col">
            <h3>Legal</h3>
            <ul>
              <li><Link to="#">Terms of Service</Link></li>
              <li><Link to="#">Privacy Policy</Link></li>
              {hasCreatorInfo && <li><Link to="#">Refund Policy</Link></li>}
              {hasCreatorInfo && <li><Link to="#">FAQ</Link></li>}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} PGFinder. All rights reserved.</p>
          {hasCreatorInfo && <p>By Shahid</p>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;