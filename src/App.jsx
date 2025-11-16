import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Listings from './pages/Listings';
import PGDetails from './pages/PGDetails';
import Login from './pages/Login';
import OwnerDashboard from './pages/OwnerDashboard';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ComplaintBox from './pages/ComplaintBox'; // New Import
import Chat from './pages/Chat'; // New Import
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/pgs.html" element={<Listings />} />
        <Route path="/pg-details.html" element={<PGDetails />} />
        <Route path="/login.html" element={<Login />} />
        
        {/* New Feature Routes */}
        <Route path="/complaint-box.html" element={<ComplaintBox />} /> 
        <Route path="/chat.html" element={<Chat />} />
        
        {/* Dashboard Routes (Protected in a real app) */}
        <Route path="/owner-dashboard.html" element={<OwnerDashboard />} />
        <Route path="/student-dashboard.html" element={<StudentDashboard />} />
        <Route path="/admin-dashboard.html" element={<AdminDashboard />} />
        
        {/* Catch-all Route: Redirects users back to Home if the path is unknown */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;