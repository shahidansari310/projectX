import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import PGCard from '../components/PGCard';
import '../assets/css/details.css';

const similarPGs = [
  { name: 'Rose Girls PG', location: 'Indiranagar, Bangalore', price: 6500, image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500' },
  { name: 'Urban Co-living', location: 'HSR Layout, Bangalore', price: 12000, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500' },
  { name: 'Budget Stay PG', location: 'Whitefield, Bangalore', price: 4500, image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=500' },
];

const PGDetails = () => {
  return (
    <>
      <Navbar />

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <Link to="/">Home</Link> / 
          <Link to="/pgs.html">All PGs</Link> / 
          <span>Sunshine Boys Hostel</span>
        </div>
      </div>

      {/* PG Details Section */}
      <section className="details-section">
        <div className="container">
          <div className="details-grid">
            {/* Main Content */}
            <div className="details-main">
              {/* Banner Image */}
              <div className="banner-image">
                <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200" alt="Sunshine Boys Hostel" />
                <div className="badge-container">
                  <span className="badge">Featured</span>
                  <span className="badge verified">✓ Verified</span>
                </div>
              </div>

              {/* Image Gallery */}
              <div className="image-gallery">
                <div className="gallery-item">
                  <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300" alt="Room" />
                </div>
                <div className="gallery-item">
                  <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300" alt="Common Area" />
                </div>
                <div className="gallery-item">
                  <img src="https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=300" alt="Kitchen" />
                </div>
                <div className="gallery-item">
                  <img src="https://images.unsplash.com/photo-1515263487990-61b07816b324?w=300" alt="Washroom" />
                </div>
              </div>

              {/* Basic Info */}
              <div className="info-section">
                <h1>Sunshine Boys Hostel</h1>
                <div className="location-rating">
                  <p className="location">📍 Koramangala 5th Block, Bangalore - 560095</p>
                  <div className="rating">
                    <span className="stars">⭐⭐⭐⭐⭐</span>
                    <span className="rating-text">4.8 (124 reviews)</span>
                  </div>
                </div>

                <div className="quick-info">
                  <div className="info-item">
                    <span className="icon">👥</span>
                    <div>
                      <strong>Gender</strong>
                      <p>Boys Only</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="icon">🛏️</span>
                    <div>
                      <strong>Room Types</strong>
                      <p>Single, Double</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="icon">🏢</span>
                    <div>
                      <strong>Available Rooms</strong>
                      <p>5 Rooms</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <span className="icon">⏰</span>
                    <div>
                      <strong>Notice Period</strong>
                      <p>1 Month</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="info-section">
                <h2>About This PG</h2>
                <p className="description">
                  Welcome to Sunshine Boys Hostel, a premium paying guest accommodation located in the heart of Koramangala. 
                  Our hostel offers comfortable living spaces with modern amenities for working professionals and students. 
                  Situated just 2 km from major tech parks and excellent connectivity to public transport, this is the perfect 
                  home away from home. The hostel features spacious rooms, high-speed WiFi, nutritious meals, and 24/7 security.
                </p>
              </div>

              {/* Amenities */}
              <div className="info-section">
                <h2>Amenities & Services</h2>
                <div className="amenities-grid">
                  <div className="amenity-item"><span className="amenity-icon">📶</span><span>High-Speed WiFi</span></div>
                  <div className="amenity-item"><span className="amenity-icon">🍽️</span><span>3 Meals Daily</span></div>
                  <div className="amenity-item"><span className="amenity-icon">🧺</span><span>Laundry Service</span></div>
                  <div className="amenity-item"><span className="amenity-icon">❄️</span><span>AC Rooms Available</span></div>
                  <div className="amenity-item"><span className="amenity-icon">🔒</span><span>24/7 Security</span></div>
                  <div className="amenity-item"><span className="amenity-icon">⚡</span><span>Power Backup</span></div>
                  <div className="amenity-item"><span className="amenity-icon">📺</span><span>Common TV Room</span></div>
                  <div className="amenity-item"><span className="amenity-icon">🅿️</span><span>Bike Parking</span></div>
                  <div className="amenity-item"><span className="amenity-icon">🧊</span><span>Refrigerator</span></div>
                  <div className="amenity-item"><span className="amenity-icon">🪑</span><span>Study Table</span></div>
                  <div className="amenity-item"><span className="amenity-icon">🚿</span><span>Hot Water</span></div>
                  <div className="amenity-item"><span className="amenity-icon">🧹</span><span>Housekeeping</span></div>
                </div>
              </div>

              {/* Room Pricing */}
              <div className="info-section">
                <h2>Room Types & Pricing</h2>
                <div className="pricing-grid">
                  <div className="pricing-card">
                    <h3>Single Occupancy</h3>
                    <div className="price-tag">
                      <span className="amount">₹10,500</span>
                      <span className="period">/month</span>
                    </div>
                    <ul className="pricing-features">
                      <li>✓ AC Room</li>
                      <li>✓ Attached Bathroom</li>
                      <li>✓ Study Table & Chair</li>
                      <li>✓ Wardrobe</li>
                      <li>✓ All Meals Included</li>
                    </ul>
                  </div>
                  <div className="pricing-card featured">
                    <div className="popular-badge">Most Popular</div>
                    <h3>Double Sharing</h3>
                    <div className="price-tag">
                      <span className="amount">₹8,500</span>
                      <span className="period">/month</span>
                    </div>
                    <ul className="pricing-features">
                      <li>✓ AC Room</li>
                      <li>✓ Attached Bathroom</li>
                      <li>✓ Study Table & Chair</li>
                      <li>✓ Wardrobe</li>
                      <li>✓ All Meals Included</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* House Rules */}
              <div className="info-section">
                <h2>House Rules</h2>
                <ul className="rules-list">
                  <li>🚫 No smoking inside the premises</li>
                  <li>🚫 No alcohol allowed</li>
                  <li>⏰ Gate closing time: 11:00 PM</li>
                  <li>👥 No visitors allowed in rooms</li>
                  <li>🔊 Maintain silence after 10:00 PM</li>
                  <li>📝 1 month notice required for vacating</li>
                  <li>💰 Security deposit: 2 months rent (refundable)</li>
                </ul>
              </div>

              {/* Location */}
              <div className="info-section">
                <h2>Location & Nearby</h2>
                <div className="nearby-places">
                  <div className="nearby-item">
                    <strong>🏢 Tech Parks:</strong>
                    <p>Prestige Tech Park (2 km), Ecospace (3 km)</p>
                  </div>
                  <div className="nearby-item">
                    <strong>🚇 Metro Station:</strong>
                    <p>Koramangala Metro - 1.5 km</p>
                  </div>
                  <div className="nearby-item">
                    <strong>🏪 Shopping:</strong>
                    <p>Forum Mall (1 km), Big Bazaar (800m)</p>
                  </div>
                  <div className="nearby-item">
                    <strong>🏥 Hospital:</strong>
                    <p>Fortis Hospital (2.5 km)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="details-sidebar">
              {/* Booking Card */}
              <div className="booking-card">
                <div className="price-header">
                  <div className="price">
                    <span className="amount">₹8,500</span>
                    <span className="period">/month</span>
                  </div>
                  <span className="availability">5 Rooms Available</span>
                </div>

                <button className="btn-primary" style={{width: '100%', marginBottom: '1rem'}}>Book Now</button>
                <button className="btn-secondary" style={{width: '100%'}}>Schedule Visit</button>

                <div className="contact-info">
                  <h4>Contact Owner</h4>
                  <div className="owner-details">
                    <div className="owner-avatar">👤</div>
                    <div>
                      <strong>Rajesh Kumar</strong>
                      <p>Property Owner</p>
                    </div>
                  </div>
                  <button className="btn-contact">📞 Show Phone Number</button>
                </div>
              </div>

              {/* Important Info */}
              <div className="info-card">
                <h4>💡 Good to Know</h4>
                <ul className="info-list">
                  <li>Security deposit required</li>
                  <li>Agreement to be signed</li>
                  <li>Photo ID mandatory</li>
                  <li>Police verification done</li>
                </ul>
              </div>

              {/* Share */}
              <div className="info-card">
                <h4>📤 Share This PG</h4>
                <div className="share-buttons">
                  <button className="share-btn">WhatsApp</button>
                  <button className="share-btn">Facebook</button>
                  <button className="share-btn">Copy Link</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Similar PGs */}
      <section className="similar-section">
        <div className="container">
          <h2>Similar PGs You Might Like</h2>
          <div className="pg-grid">
            {similarPGs.map((pg, index) => (
              // Using a simplified PGCard for similar listings
              <div className="pg-card" key={index}>
                <div className="pg-image">
                    <img src={pg.image} alt="PG" />
                </div>
                <div className="pg-content">
                    <h3>{pg.name}</h3>
                    <p className="location">📍 {pg.location}</p>
                    <div className="pg-footer">
                        <div className="price">
                            <span className="amount">₹{pg.price.toLocaleString()}</span>
                            <span className="period">/month</span>
                        </div>
                        <Link to="/pg-details.html" className="btn-view">View</Link>
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer hasCreatorInfo={false} />
    </>
  );
};

export default PGDetails;