import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/style.css'; 
import '../assets/css/dashboard.css'; 

const ComplaintBox = () => {
    const [complaint, setComplaint] = useState({
        pgName: '',
        subject: '',
        details: ''
    });

    const handleChange = (e) => {
        setComplaint({ ...complaint, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // --- BACKEND API CALL PLACEHOLDER ---
        console.log('Submitting complaint:', complaint);
        // fetch('/api/complaints', { method: 'POST', body: JSON.stringify(complaint) });
        
        alert('Complaint submitted successfully! The Admin team will review it shortly.');
        setComplaint({ pgName: '', subject: '', details: '' });
    };

    return (
        <>
            <Navbar />
            <div className="container" style={{paddingTop: '2rem', paddingBottom: '2rem', minHeight: '80vh'}}>
                <div className="dashboard-header">
                    <div>
                        <h1>Complaint Box</h1>
                        <p>File a complaint regarding a PG, owner, or any platform issue.</p>
                    </div>
                </div>

                <div className="section-card">
                    <form className="pg-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="pgName">PG Name / Property ID (If applicable)</label>
                            <input 
                                type="text" 
                                id="pgName" 
                                placeholder="e.g., Sunshine Boys Hostel or PGF1234" 
                                value={complaint.pgName} 
                                onChange={handleChange} 
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject *</label>
                            <input 
                                type="text" 
                                id="subject" 
                                placeholder="e.g., Hygiene issue, misbehavior, pricing discrepancy" 
                                value={complaint.subject} 
                                onChange={handleChange} 
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="details">Complaint Details *</label>
                            <textarea 
                                id="details" 
                                rows="6" 
                                placeholder="Provide detailed information about the issue (dates, names, etc.)." 
                                value={complaint.details} 
                                onChange={handleChange} 
                                required
                            ></textarea>
                            <small>All complaints are confidential and reviewed by the Admin team.</small>
                        </div>

                        <div className="form-actions" style={{justifyContent: 'flex-start'}}>
                            <button type="submit" className="btn-primary" style={{width: 'auto'}}>Submit Complaint</button>
                            <button type="button" className="btn-secondary" style={{width: 'auto'}} onClick={() => setComplaint({ pgName: '', subject: '', details: '' })}>Clear Form</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer hasCreatorInfo={false} />
        </>
    );
};

export default ComplaintBox;