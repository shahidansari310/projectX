import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../assets/css/dashboard.css';

const StatCard = ({ iconClass, icon, title, number, change, changeClass }) => (
  <div className="stat-card">
    <div className={`stat-icon ${iconClass}`}>{icon}</div>
    <div className="stat-info">
      <h3>{title}</h3>
      <p className="stat-number">{number}</p>
      <span className={`stat-change ${changeClass}`}>{change}</span>
    </div>
  </div>
);

const OwnerDashboard = () => {
  
  const handleCommissionPayment = (e) => {
    e.preventDefault();
    // --- BACKEND API CALL PLACEHOLDER ---
    console.log("Initiating payment for listing commission...");
    alert("Payment gateway simulation: Redirecting to complete ₹500 listing fee. On success, the listing status will change to Active.");
    // In a real application, this would trigger a payment gateway redirect/modal
  };

  const CommissionSection = (
    <div className="section-card commission-card">
      <div className="section-header">
        <h2>Pending Listing Commission</h2>
      </div>

      <div className="bookings-list">
        <div className="booking-item">
          <div className="booking-user">
            <div className="user-avatar" style={{background: 'var(--accent)'}}>💰</div>
            <div>
              <strong>Pending Fee: Sunshine Boys Hostel</strong>
              <p>One-time listing commission required to activate the property.</p>
            </div>
          </div>
          <div className="booking-date">
            <p>Commission: <span style={{fontWeight: 700, color: 'var(--accent)'}}>₹500</span></p>
            <span className="time negative">Required Action</span>
          </div>
          <div className="booking-actions">
            <button className="btn-small accept" onClick={handleCommissionPayment} style={{backgroundColor: 'var(--accent)'}}>Pay Now</button>
          </div>
        </div>
        <div className="booking-item">
          <div className="booking-user">
            <div className="user-avatar" style={{background: 'var(--success)'}}>✓</div>
            <div>
              <strong>Payment Complete: Rose Girls PG</strong>
              <p>Listing commission paid and active.</p>
            </div>
          </div>
          <div className="booking-date">
            <p>Date: 01 Nov 2024</p>
            <span className="time positive">Paid</span>
          </div>
          <div className="booking-actions">
            <button className="btn-small accept" disabled style={{backgroundColor: 'var(--success)', opacity: 0.6}}>View Receipt</button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Use Navbar with isDashboard prop set to true */}
      <Navbar isDashboard={true} userName="Rajesh Kumar" />

      {/* Dashboard Layout */}
      <div className="dashboard-layout">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-header">
            <h3>Owner Panel</h3>
          </div>
          <nav className="sidebar-nav">
            <Link to="#" className="nav-item active">
              <span className="icon">📊</span>
              <span>Dashboard</span>
            </Link>
            <Link to="#" className="nav-item">
              <span className="icon">🏠</span>
              <span>My PGs</span>
            </Link>
            <Link to="#" className="nav-item">
              <span className="icon">➕</span>
              <span>Add New PG</span>
            </Link>
            <Link to="#" className="nav-item">
              <span className="icon">📋</span>
              <span>Bookings</span>
            </Link>
            {/* New Chat Link */}
            <Link to="/chat.html" className="nav-item">
              <span className="icon">💬</span>
              <span>Customer Chat</span>
            </Link>
            <Link to="#" className="nav-item">
              <span className="icon">⚙️</span>
              <span>Settings</span>
            </Link>
            <Link to="#" className="nav-item logout">
              <span className="icon">🚪</span>
              <span>Logout</span>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="dashboard-main">
          <div className="dashboard-header">
            <div>
              <h1>Dashboard</h1>
              <p>Welcome back, Rajesh! Here's your overview</p>
            </div>
            <button className="btn-primary">➕ Add New PG</button>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <StatCard iconClass="blue" icon="🏠" title="Total PGs" number="5" change="+1 this month" changeClass="positive" />
            <StatCard iconClass="green" icon="✓" title="Active Bookings" number="23" change="+3 this week" changeClass="positive" />
            <StatCard iconClass="orange" icon="💰" title="Monthly Revenue" number="₹1,95,500" change="+12% from last month" changeClass="positive" />
            <StatCard iconClass="purple" icon="👁️" title="Total Views" number="1,247" change="This month" changeClass="neutral" />
          </div>

          {CommissionSection} {/* Display the new Commission Section */}

          {/* My PGs Section */}
          <div className="section-card">
            <div className="section-header">
              <h2>My PG Listings</h2>
              <Link to="#" className="view-all">View All →</Link>
            </div>

            <div className="table-container">
              <table className="pg-table">
                <thead>
                  <tr>
                    <th>PG Name</th>
                    <th>Location</th>
                    <th>Rent</th>
                    <th>Available</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="pg-info">
                        <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=100" alt="PG" />
                        <div>
                          <strong>Sunshine Boys Hostel</strong>
                          <span className="sub-text">Boys Only</span>
                        </div>
                      </div>
                    </td>
                    <td>Koramangala, Bangalore</td>
                    <td>₹8,500/mo</td>
                    <td><span className="badge-available">5 Rooms</span></td>
                    <td><span className="status-badge active">Active</span></td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn edit">✏️</button>
                        <button className="action-btn view">👁️</button>
                        <button className="action-btn delete">🗑️</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="pg-info">
                        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=100" alt="PG" />
                        <div>
                          <strong>Rose Girls PG</strong>
                          <span className="sub-text">Girls Only</span>
                        </div>
                      </div>
                    </td>
                    <td>Indiranagar, Bangalore</td>
                    <td>₹6,500/mo</td>
                    <td><span className="badge-limited">2 Rooms</span></td>
                    <td><span className="status-badge active">Active</span></td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn edit">✏️</button>
                        <button className="action-btn view">👁️</button>
                        <button className="action-btn delete">🗑️</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="pg-info">
                        <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=100" alt="PG" />
                        <div>
                          <strong>Urban Co-living Space</strong>
                          <span className="sub-text">Co-living</span>
                        </div>
                      </div>
                    </td>
                    <td>HSR Layout, Bangalore</td>
                    <td>₹12,000/mo</td>
                    <td><span className="badge-full">Full</span></td>
                    <td><span className="status-badge active">Active</span></td>
                    <td>
                      <div className="action-buttons">
                        <button className="action-btn edit">✏️</button>
                        <button className="action-btn view">👁️</button>
                        <button className="action-btn delete">🗑️</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Add New PG Form - Modified with commission notice */}
          <div className="section-card">
            <div className="section-header">
              <h2>Add New PG Listing</h2>
            </div>

            <form className="pg-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="pg-name">PG Name *</label>
                  <input type="text" id="pg-name" placeholder="Enter PG name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender Preference *</label>
                  <select id="gender" required>
                    <option value="">Select Gender</option>
                    <option>Boys Only</option>
                    <option>Girls Only</option>
                    <option>Co-living</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <select id="city" required>
                    <option value="">Select City</option>
                    <option>Bangalore</option>
                    <option>Mumbai</option>
                    <option>Delhi</option>
                    <option>Pune</option>
                    <option>Hyderabad</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="locality">Locality *</label>
                  <input type="text" id="locality" placeholder="e.g., Koramangala" required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Full Address *</label>
                <textarea id="address" rows="3" placeholder="Enter complete address" required></textarea>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="rent">Monthly Rent (₹) *</label>
                  <input type="number" id="rent" placeholder="e.g., 8500" required />
                </div>
                <div className="form-group">
                  <label htmlFor="rooms">Total Rooms *</label>
                  <input type="number" id="rooms" placeholder="e.g., 10" required />
                </div>
                <div className="form-group">
                  <label htmlFor="available">Available Rooms *</label>
                  <input type="number" id="available" placeholder="e.g., 5" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="room-type">Room Type *</label>
                  <select id="room-type" required>
                    <option value="">Select Type</option>
                    <option>Single</option>
                    <option>Double</option>
                    <option>Triple</option>
                    <option>4+ Sharing</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="deposit">Security Deposit (₹) *</label>
                  <input type="number" id="deposit" placeholder="e.g., 17000" required />
                </div>
              </div>

              <div className="form-group">
                <label>Amenities *</label>
                <div className="checkbox-grid">
                  <label className="checkbox-label"><input type="checkbox" /> WiFi</label>
                  <label className="checkbox-label"><input type="checkbox" /> Meals</label>
                  <label className="checkbox-label"><input type="checkbox" /> Laundry</label>
                  <label className="checkbox-label"><input type="checkbox" /> AC Rooms</label>
                  <label className="checkbox-label"><input type="checkbox" /> Parking</label>
                  <label className="checkbox-label"><input type="checkbox" /> Power Backup</label>
                  <label className="checkbox-label"><input type="checkbox" /> Security</label>
                  <label className="checkbox-label"><input type="checkbox" /> Gym</label>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description *</label>
                <textarea id="description" rows="5" placeholder="Describe your PG, facilities, rules, etc." required></textarea>
                <small style={{color: 'var(--accent)', fontWeight: 600}}>
                    Note: A one-time listing commission of ₹500 is required upon submission to make the listing live.
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="photos">Upload Photos (Max 5)</label>
                <input type="file" id="photos" multiple accept="image/*" />
                <small>JPG, PNG or JPEG. Max 5MB each.</small>
              </div>

              <div className="form-actions">
                <button type="button" className="btn-secondary">Cancel</button>
                <button type="submit" className="btn-primary" onClick={handleCommissionPayment}>
                    Publish & Pay Commission
                </button>
              </div>
            </form>
          </div>

          {/* Recent Bookings */}
          <div className="section-card">
            <div className="section-header">
              <h2>Recent Booking Requests</h2>
              <Link to="#" className="view-all">View All →</Link>
            </div>

            <div className="bookings-list">
              <div className="booking-item">
                <div className="booking-user">
                  <div className="user-avatar">👤</div>
                  <div>
                    <strong>Amit Sharma</strong>
                    <p>Sunshine Boys Hostel</p>
                  </div>
                </div>
                <div className="booking-date">
                  <p>Move-in: 15 Dec 2024</p>
                  <span className="time">2 hours ago</span>
                </div>
                <div className="booking-actions">
                  <button className="btn-small accept">Accept</button>
                  <button className="btn-small reject">Reject</button>
                </div>
              </div>

              <div className="booking-item">
                <div className="booking-user">
                  <div className="user-avatar">👤</div>
                  <div>
                    <strong>Priya Singh</strong>
                    <p>Rose Girls PG</p>
                  </div>
                </div>
                <div className="booking-date">
                  <p>Move-in: 20 Dec 2024</p>
                  <span className="time">5 hours ago</span>
                </div>
                <div className="booking-actions">
                  <button className="btn-small accept">Accept</button>
                  <button className="btn-small reject">Reject</button>
                </div>
              </div>

              <div className="booking-item">
                <div className="booking-user">
                  <div className="user-avatar">👤</div>
                  <div>
                    <strong>Rahul Verma</strong>
                    <p>Urban Co-living Space</p>
                  </div>
                </div>
                <div className="booking-date">
                  <p>Move-in: 10 Dec 2024</p>
                  <span className="time">1 day ago</span>
                </div>
                <div className="booking-actions">
                  <button className="btn-small accept">Accept</button>
                  <button className="btn-small reject">Reject</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer hasCreatorInfo={false} />
    </>
  );
};

export default OwnerDashboard;