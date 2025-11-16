import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/dashboard.css'; 

// Placeholder data for the student dashboard
const favoritePGs = [
    { id: 1, name: 'Sunshine Boys Hostel', location: 'Koramangala', rent: '₹8,500/mo', status: 'Available', image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=100' },
    { id: 2, name: 'Urban Co-living', location: 'HSR Layout', rent: '₹12,000/mo', status: 'Limited', image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=100' },
];

const BookingRequests = [
    { id: 1, pgName: 'Sunshine Boys Hostel', moveIn: '15 Jan 2025', status: 'Pending' },
    { id: 2, pgName: 'Rose Girls PG', moveIn: '28 Dec 2024', status: 'Confirmed' },
];

const StudentDashboard = () => {
    const userName = "Priya Sharma";

    return (
        <>
            <Navbar isDashboard={true} userName={userName} />

            <div className="dashboard-layout">
                {/* Sidebar */}
                <aside className="dashboard-sidebar">
                    <div className="sidebar-header">
                        <h3>Student Panel</h3>
                    </div>
                    <nav className="sidebar-nav">
                        <Link to="#" className="nav-item active">
                            <span className="icon">📊</span>
                            <span>Dashboard</span>
                        </Link>
                        <Link to="#" className="nav-item">
                            <span className="icon">⭐</span>
                            <span>My Favorites</span>
                        </Link>
                        <Link to="#" className="nav-item">
                            <span className="icon">📋</span>
                            <span>My Bookings</span>
                        </Link>
                        {/* New Chat Link */}
                        <Link to="/chat.html" className="nav-item">
                            <span className="icon">💬</span>
                            <span>My Chats</span>
                        </Link>
                         {/* New Complaint Link */}
                        <Link to="/complaint-box.html" className="nav-item">
                            <span className="icon">🚨</span>
                            <span>File Complaint</span>
                        </Link>
                        <Link to="#" className="nav-item">
                            <span className="icon">⚙️</span>
                            <span>Profile Settings</span>
                        </Link>
                        <Link to="/login.html" className="nav-item logout">
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
                            <p>Welcome back, {userName}! Find your next stay or check your status.</p>
                        </div>
                        <Link to="/pgs.html" className="btn-primary">
                            🏠 Browse PGs
                        </Link>
                    </div>

                    {/* Stats Cards */}
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-icon blue">⭐</div>
                            <div className="stat-info">
                                <h3>Saved PGs</h3>
                                <p className="stat-number">{favoritePGs.length}</p>
                                <span className="stat-change neutral">Tracked Properties</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon green">✓</div>
                            <div className="stat-info">
                                <h3>Confirmed Bookings</h3>
                                <p className="stat-number">1</p>
                                <span className="stat-change positive">Ready to move in</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon orange">⏰</div>
                            <div className="stat-info">
                                <h3>Pending Requests</h3>
                                <p className="stat-number">1</p>
                                <span className="stat-change negative">Awaiting Owner Approval</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon purple">🗓️</div>
                            <div className="stat-info">
                                <h3>Next Move-in</h3>
                                <p className="stat-number">28 Dec</p>
                                <span className="stat-change positive">Rose Girls PG</span>
                            </div>
                        </div>
                    </div>

                    {/* My Bookings Section */}
                    <div className="section-card">
                        <div className="section-header">
                            <h2>My Booking Requests</h2>
                            <Link to="#" className="view-all">View All →</Link>
                        </div>

                        <div className="bookings-list">
                            {BookingRequests.map(booking => (
                                <div key={booking.id} className="booking-item">
                                    <div className="booking-user">
                                        <div className="user-avatar">🏠</div>
                                        <div>
                                            <strong>{booking.pgName}</strong>
                                            <p>Status: {booking.status}</p>
                                        </div>
                                    </div>
                                    <div className="booking-date">
                                        <p>Move-in: {booking.moveIn}</p>
                                        <span className={`time ${booking.status.toLowerCase()}`}>
                                            {booking.status === 'Confirmed' ? 'Active' : 'Awaiting'}
                                        </span>
                                    </div>
                                    <div className="booking-actions">
                                        <button className="btn-small accept">Details</button>
                                        {booking.status === 'Pending' && <button className="btn-small reject">Cancel</button>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Saved PGs Section */}
                    <div className="section-card">
                        <div className="section-header">
                            <h2>My Favorite PG Listings</h2>
                            <Link to="#" className="view-all">View All →</Link>
                        </div>

                        <div className="table-container">
                            <table className="pg-table">
                                <thead>
                                    <tr>
                                        <th>PG Name</th>
                                        <th>Location</th>
                                        <th>Rent</th>
                                        <th>Availability</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {favoritePGs.map(pg => (
                                        <tr key={pg.id}>
                                            <td>
                                                <div className="pg-info">
                                                    <img src={pg.image} alt={pg.name} />
                                                    <div>
                                                        <strong>{pg.name}</strong>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{pg.location}, Bangalore</td>
                                            <td>{pg.rent}</td>
                                            <td>
                                                <span className={pg.status === 'Available' ? 'badge-available' : 'badge-limited'}>
                                                    {pg.status}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="action-buttons">
                                                    <Link to="/pg-details.html" className="action-btn view">👁️</Link>
                                                    <button className="action-btn delete">🗑️</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </main>
            </div>

            <Footer hasCreatorInfo={false} />
        </>
    );
};

export default StudentDashboard;