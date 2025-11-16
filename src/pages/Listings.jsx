import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PGCard from '../components/PGCard';
import { Link } from 'react-router-dom';
import '../assets/css/listings.css'; // Import page-specific styles

const allPGs = [
  { name: 'Sunshine Boys Hostel', location: 'Koramangala, Bangalore', features: ['🛏️ Single/Double', '📶 WiFi', '🍽️ Meals'], price: 8500, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500', badge: 'Featured' },
  { name: 'Rose Girls PG', location: 'Indiranagar, Bangalore', features: ['🛏️ Triple', '🧺 Laundry', '🔒 Secure'], price: 6500, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500', badge: 'New' },
  { name: 'Urban Co-living Space', location: 'HSR Layout, Bangalore', features: ['🏋️ Gym', '📺 Common Area', '🅿️ Parking'], price: 12000, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500', badge: 'Popular' },
  { name: 'Budget Stay PG', location: 'Whitefield, Bangalore', features: ['🛏️ 4 Sharing', '📶 WiFi', '⚡ Power Backup'], price: 4500, image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=500', badge: '' },
  { name: 'Premium Girls Hostel', location: 'Marathahalli, Bangalore', features: ['🛏️ Double', '❄️ AC', '🍽️ 3 Meals'], price: 10500, image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?w=500', badge: 'AC Rooms' },
  { name: 'Tech Park Boys PG', location: 'Electronic City, Bangalore', features: ['🛏️ Single', '🍽️ Meals', '🅿️ Parking'], price: 9000, image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500', badge: '' },
];

const Listings = () => {
  return (
    <>
      <Navbar />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Find Your Perfect PG</h1>
          <p>Showing <strong>24</strong> results in <strong>Bangalore</strong></p>
        </div>
      </section>

      {/* Main Content */}
      <section className="listings-section">
        <div className="container">
          <div className="listings-wrapper">
            {/* Sidebar Filters */}
            <aside className="filters-sidebar">
              <div className="filter-card">
                <h3>Filters</h3>
                
                <div className="filter-group">
                  <label className="filter-label">📍 City</label>
                  <select className="filter-input">
                    <option>Bangalore</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Pune</option>
                    <option>Hyderabad</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label className="filter-label">💰 Rent Range</label>
                  <div className="rent-inputs">
                    <input type="number" placeholder="Min" className="filter-input" />
                    <span>-</span>
                    <input type="number" placeholder="Max" className="filter-input" />
                  </div>
                </div>

                <div className="filter-group">
                  <label className="filter-label">👤 Gender Preference</label>
                  <div className="checkbox-group">
                    <label className="checkbox-label"><input type="checkbox" /> Male</label>
                    <label className="checkbox-label"><input type="checkbox" /> Female</label>
                    <label className="checkbox-label"><input type="checkbox" /> Co-living</label>
                  </div>
                </div>

                <div className="filter-group">
                  <label className="filter-label">🛏️ Room Type</label>
                  <div className="checkbox-group">
                    <label className="checkbox-label"><input type="checkbox" /> Single</label>
                    <label className="checkbox-label"><input type="checkbox" /> Double</label>
                    <label className="checkbox-label"><input type="checkbox" /> Triple</label>
                    <label className="checkbox-label"><input type="checkbox" /> 4+ Sharing</label>
                  </div>
                </div>

                <div className="filter-group">
                  <label className="filter-label">✨ Amenities</label>
                  <div className="checkbox-group">
                    <label className="checkbox-label"><input type="checkbox" /> WiFi</label>
                    <label className="checkbox-label"><input type="checkbox" /> Meals</label>
                    <label className="checkbox-label"><input type="checkbox" /> Laundry</label>
                    <label className="checkbox-label"><input type="checkbox" /> AC Rooms</label>
                    <label className="checkbox-label"><input type="checkbox" /> Parking</label>
                    <label className="checkbox-label"><input type="checkbox" /> Gym</label>
                  </div>
                </div>

                <button className="btn-primary" style={{width: '100%'}}>Apply Filters</button>
                <button className="btn-secondary" style={{width: '100%', marginTop: '0.5rem'}}>Clear All</button>
              </div>
            </aside>

            {/* PG Listings Grid */}
            <div className="listings-content">
              <div className="sort-bar">
                <span>Sort by:</span>
                <select className="sort-select">
                  <option>Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>

              <div className="pg-grid">
                {allPGs.map((pg, index) => (
                    <PGCard key={index} pg={pg} />
                ))}
              </div>

              {/* Pagination */}
              <div className="pagination">
                <button className="page-btn" disabled>Previous</button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">4</button>
                <button className="page-btn">Next</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer hasCreatorInfo={true} />
    </>
  );
};

export default Listings;