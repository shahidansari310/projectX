import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/style.css'; 
import '../assets/css/dashboard.css'; 
// --- START FIREBASE IMPORTS ---
import { db } from '../firebase'; 
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; 
// --- END FIREBASE IMPORTS ---

const ComplaintBox = () => {
    const [complaint, setComplaint] = useState({
        pgName: '',
        subject: '',
        details: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        setComplaint({ ...complaint, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        
        try {
            const complaintsCollection = collection(db, 'complaints');
            
            // Prepare the data to be saved in Firestore
            const newComplaint = {
                ...complaint,
                timestamp: serverTimestamp(), // Add server-side timestamp
                status: 'pending', // Initial status
                // In a real app, you would add: userId: auth.currentUser.uid
            };

            // Add the new document to the 'complaints' collection
            await addDoc(complaintsCollection, newComplaint);
            
            console.log('Submitted complaint to Firestore:', newComplaint);
            alert('Complaint submitted successfully! The Admin team will review it shortly.');
            setComplaint({ pgName: '', subject: '', details: '' }); // Clear form
        } catch (err) {
            console.error('Error submitting complaint:', err);
            setError('Failed to submit complaint. Please check your connection and try again.');
        } finally {
            setIsLoading(false);
        }
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
                        {error && <p style={{ color: '#ff4444', marginBottom: '1rem' }}>{error}</p>}
                        
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
                            <button 
                                type="submit" 
                                className="btn-primary" 
                                style={{width: 'auto'}}
                                disabled={isLoading}
                            >
                                {isLoading ? 'Submitting...' : 'Submit Complaint'}
                            </button>
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