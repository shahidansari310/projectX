import React from 'react';
import { Link } from 'react-router-dom';

const PGCard = ({ pg }) => {
  return (
    <div className="pg-card">
      <div className="pg-image">
        <img src={pg.image} alt={pg.name} />
        {pg.badge && <span className={`badge ${pg.badge.toLowerCase()}`}>{pg.badge}</span>}
      </div>
      <div className="pg-content">
        <h3>{pg.name}</h3>
        <p className="location">📍 {pg.location}</p>
        {pg.features && (
          <div className="pg-features">
            {pg.features.map((feature, index) => (
              <span key={index} className="feature">{feature}</span>
            ))}
          </div>
        )}
        <div className="pg-footer">
          <div className="price">
            <span className="amount">₹{pg.price.toLocaleString()}</span>
            <span className="period">/month</span>
          </div>
          <Link to="/pg-details" className="btn-view">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default PGCard;