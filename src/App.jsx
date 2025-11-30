import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Listings from './pages/Listings';
import PGDetails from './pages/PGDetails';
import Login from './pages/Login';
import OwnerDashboard from './pages/OwnerDashboard';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ComplaintBox from './pages/ComplaintBox'; 
import Chat from './pages/Chat'; 
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Public Routes - .html removed */}
        <Route path="/" element={<Home />} />
        <Route path="/pgs" element={<Listings />} />
        <Route path="/pg-details" element={<PGDetails />} />
        <Route path="/login" element={<Login />} />
        
        {/* New Feature Routes - .html removed */}
        <Route path="/complaint-box" element={<ComplaintBox />} /> 
        <Route path="/chat" element={<Chat />} />
        
        {/* Dashboard Routes - .html removed */}
        <Route path="/owner-dashboard" element={<OwnerDashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        
        {/* Catch-all Route: Redirects users back to Home if the path is unknown */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;