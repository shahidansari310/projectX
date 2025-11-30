import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PGCard from '../components/PGCard';
import '../assets/css/home.css'; // Import page-specific styles
import '../assets/css/style.css'; // Import global styles

const featuredPGs = [
  { name: 'Sunshine Boys Hostel', location: 'Koramangala, Bangalore', features: ['🛏️ Single/Double', '📶 WiFi', '🍽️ Meals'], price: 8500, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500', badge: 'Featured' },
  { name: 'Rose Girls PG', location: 'Indiranagar, Bangalore', features: ['🛏️ Triple Sharing', '🧺 Laundry', '🔒 Secure'], price: 6500, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500', badge: 'New' },
  { name: 'Urban Co-living Space', location: 'HSR Layout, Bangalore', features: ['🏋️ Gym', '📺 Common Area', '🅿️ Parking'], price: 12000, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500', badge: 'Popular' },
  { name: 'Budget Stay PG', location: 'Whitefield, Bangalore', features: ['🛏️ 4 Sharing', '📶 WiFi', '⚡ Power Backup'], price: 4500, image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=500', badge: '' },
];

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Find Your Perfect PG Nearby</h1>
          <p className="hero-subtitle">Discover comfortable and affordable paying guest accommodations</p>
          
          {/* Search Bar */}
          <div className="search-container">
            <div className="search-box">
              <div className="search-field">
                <label>📍 City</label>
                <input type="text" placeholder="Enter city name" />
              </div>
              <div className="search-field">
                <label>💰 Rent Range</label>
                <select>
                  <option>Select Range</option>
                  <option>₹3,000 - ₹5,000</option>
                  <option>₹5,000 - ₹8,000</option>
                  <option>₹8,000 - ₹12,000</option>
                  <option>₹12,000+</option>
                </select>
              </div>
              <div className="search-field">
                <label>👤 Gender</label>
                <select>
                  <option>Any</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Co-living</option>
                </select>
              </div>
              <button className="btn-search">Search PG</button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured PGs Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured PGs</h2>
            <Link to="/pgs" className="view-all">View All →</Link>
          </div>
          
          <div className="pg-grid">
            {featuredPGs.map((pg, index) => (
              <PGCard key={index} pg={pg} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose PGFinder?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔍</div>
              <h3>Easy Search</h3>
              <p>Find your ideal PG with advanced filters and real-time availability</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✅</div>
              <h3>Verified Listings</h3>
              <p>All PGs are verified with authentic photos and genuine reviews</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💬</div>
              <h3>Direct Contact</h3>
              <p>Connect directly with PG owners without any middleman</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Secure Booking</h3>
              <p>Safe and secure booking process with transparent pricing</p>
            </div>
          </div>
        </div>
      </section>

      <Footer hasCreatorInfo={true} />
    </>
  );
};

export default Home;