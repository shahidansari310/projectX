import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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

// Placeholder data for Admin tasks
const recentUsers = [
    { id: 1, name: 'Priya S.', role: 'Student', date: '5 mins ago' },
    { id: 2, name: 'Rajesh K.', role: 'Owner', date: '1 hour ago' },
    { id: 3, name: 'Amit V.', role: 'Student', date: '1 day ago' },
];

const pendingVerifications = [
    { id: 1, pgName: 'Blue Star PG', owner: 'Suresh P.', type: 'New Listing' },
    { id: 2, pgName: 'Owner Rajesh K.', owner: 'Rajesh K.', type: 'Profile Update' },
];


const AdminDashboard = () => {
    const userName = "Admin";

    return (
        <>
            <Navbar isDashboard={true} userName={userName} />

            <div className="dashboard-layout">
                {/* Sidebar */}
                <aside className="dashboard-sidebar">
                    <div className="sidebar-header">
                        <h3>Admin Panel</h3>
                    </div>
                    <nav className="sidebar-nav">
                        <Link to="#" className="nav-item active">
                            <span className="icon">👑</span>
                            <span>Overview</span>
                        </Link>
                        <Link to="#" className="nav-item">
                            <span className="icon">🏠</span>
                            <span>Manage PGs</span>
                        </Link>
                        <Link to="#" className="nav-item">
                            <span className="icon">👥</span>
                            <span>Manage Users</span>
                        </Link>
                        <Link to="#" className="nav-item">
                            <span className="icon">✅</span>
                            <span>Verifications</span>
                        </Link>
                        <Link to="#" className="nav-item">
                            <span className="icon">⚙️</span>
                            <span>System Settings</span>
                        </Link>
                        {/* Link Fix */}
                        <Link to="/login" className="nav-item logout">
                            <span className="icon">🚪</span>
                            <span>Logout</span>
                        </Link>
                    </nav>
                </aside>

                {/* Main Content */}
                <main className="dashboard-main">
                    <div className="dashboard-header">
                        <div>
                            <h1>System Overview</h1>
                            <p>Administrative control panel for PGFinder operations.</p>
                        </div>
                        <button className="btn-primary">
                            ⚙️ View Reports
                        </button>
                    </div>

                    {/* Stats Cards */}
                    <div className="stats-grid">
                        <StatCard iconClass="blue" icon="🏠" title="Total Listings" number="210" change="+15 new" changeClass="positive" />
                        <StatCard iconClass="green" icon="👥" title="Total Users" number="1,540" change="+50 this week" changeClass="positive" />
                        <StatCard iconClass="orange" icon="✅" title="Pending Vefifications" number="8" change="Action Required" changeClass="negative" />
                        <StatCard iconClass="purple" icon="💰" title="Platform Revenue" number="₹5.5L" change="+18% from last month" changeClass="positive" />
                    </div>

                    {/* Pending Verification Tasks */}
                    <div className="section-card">
                        <div className="section-header">
                            <h2>Pending Verifications</h2>
                            <Link to="#" className="view-all">View All →</Link>
                        </div>

                        <div className="bookings-list">
                            {pendingVerifications.map(task => (
                                <div key={task.id} className="booking-item">
                                    <div className="booking-user">
                                        <div className="user-avatar">📝</div>
                                        <div>
                                            <strong>{task.pgName}</strong>
                                            <p>Owner: {task.owner}</p>
                                        </div>
                                    </div>
                                    <div className="booking-date">
                                        <p>Type: {task.type}</p>
                                        <span className="time negative">Action Required</span>
                                    </div>
                                    <div className="booking-actions">
                                        <button className="btn-small accept">Review</button>
                                        <button className="btn-small reject">Ignore</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recent User Activity */}
                    <div className="section-card">
                        <div className="section-header">
                            <h2>Recent User Activity</h2>
                            <Link to="#" className="view-all">View All →</Link>
                        </div>

                        <div className="table-container">
                            <table className="pg-table">
                                <thead>
                                    <tr>
                                        <th>User Name</th>
                                        <th>Role</th>
                                        <th>Activity Time</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentUsers.map(user => (
                                        <tr key={user.id}>
                                            <td>
                                                <div className="pg-info">
                                                    <div className="user-avatar">👤</div>
                                                    <div>
                                                        <strong>{user.name}</strong>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{user.role}</td>
                                            <td>{user.date}</td>
                                            <td>
                                                <div className="action-buttons">
                                                    <button className="action-btn view">👁️</button>
                                                    <button className="action-btn delete">❌</button>
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

export default AdminDashboard;