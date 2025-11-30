import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../assets/css/login.css';
// --- START FIREBASE IMPORTS ---
import { auth } from '../firebase'; 
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword 
} from 'firebase/auth';
// --- END FIREBASE IMPORTS ---

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('student');
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [error, setError] = useState(null); 
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();

  const handleToggleForm = (e) => {
    e.preventDefault();
    setIsLogin(prev => !prev);
    setError(null); 
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleRoleChange = (newRole) => {
    setRole(newRole);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }
    
    try {
      if (isLogin) {
        // Firebase Login
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // Firebase Signup
        await createUserWithEmailAndPassword(auth, email, password);
        // OPTIONAL: Save user role/details to Firestore here
      }

      // FIXED: Redirect paths to remove .html
      let redirectPath = '/student-dashboard';
      if (role === 'owner') {
        redirectPath = '/owner-dashboard';
      } else if (role === 'admin') {
        redirectPath = '/admin-dashboard';
      }
      navigate(redirectPath);

    } catch (err) {
      console.error("Authentication Error:", err.code, err.message);
      let message = "An unexpected error occurred. Please try again.";
      if (err.code && err.code.includes("auth/")) {
         // Basic error cleanup for display
        message = err.message.replace("Firebase: ", "").replace(/\(auth-.*\)/, "").trim();
      }
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const LoginForm = (
    <form className={`login-form ${!isLogin ? 'hidden' : ''}`} id="loginForm" onSubmit={handleSubmit}>
      {/* ERROR MESSAGE DISPLAY */}
      {error && <p style={{ color: '#ff4444', textAlign: 'center' }}>{error}</p>}
      
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input 
          type="email" 
          id="email" 
          placeholder="Enter your email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          placeholder="Enter your password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required
        />
      </div>

      <div className="form-options">
        <label className="checkbox-label">
          <input type="checkbox" id="remember" />
          <span>Remember me</span>
        </label>
        <Link to="#" className="forgot-link">Forgot Password?</Link>
      </div>

      <button type="submit" className="btn-submit" disabled={isLoading}>
        {isLoading ? 'Signing In...' : 'Sign In'}
      </button>

      <div className="divider"><span>OR</span></div>

      <div className="social-login">
        <button type="button" className="social-btn google">
          <span>🔵</span> Continue with Google
        </button>
        <button type="button" className="social-btn facebook">
          <span>📘</span> Continue with Facebook
        </button>
      </div>

      <p className="signup-link">
        Don't have an account? 
        <Link to="#" onClick={handleToggleForm} id="showSignup">Sign Up</Link>
      </p>
    </form>
  );

  const SignupForm = (
    <form className={`login-form ${isLogin ? 'hidden' : ''}`} id="signupForm" onSubmit={handleSubmit}>
       {/* ERROR MESSAGE DISPLAY */}
      {error && <p style={{ color: '#ff4444', textAlign: 'center' }}>{error}</p>}

      <div className="form-group">
        <label htmlFor="fullname">Full Name</label>
        <input type="text" id="fullname" placeholder="Enter your full name" required/>
      </div>

      <div className="form-group">
        <label htmlFor="signup-email">Email Address</label>
        <input type="email" id="signup-email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="Enter your phone number" required/>
      </div>

      <div className="form-group">
        <label htmlFor="signup-password">Password</label>
        <input type="password" id="signup-password" placeholder="Create a password" required value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" placeholder="Re-enter your password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>

      <div className="form-options">
        <label className="checkbox-label">
          <input type="checkbox" id="terms" required />
          <span>I agree to Terms & Conditions</span>
        </label>
      </div>

      <button type="submit" className="btn-submit" disabled={isLoading}>
        {isLoading ? 'Creating Account...' : 'Create Account'}
      </button>

      <div className="divider"><span>OR</span></div>

      <div className="social-login">
        <button type="button" className="social-btn google">
          <span>🔵</span> Sign up with Google
        </button>
        <button type="button" className="social-btn facebook">
          <span>📘</span> Sign up with Facebook
        </button>
      </div>

      <p className="signup-link">
        Already have an account? 
        <Link to="#" onClick={handleToggleForm} id="showLogin">Sign In</Link>
      </p>
    </form>
  );

  return (
    <>
      <Navbar />
      <section className="login-section">
        <div className="login-container">
          <div className="login-grid">
            {/* Left Side - Image */}
            <div className="login-image">
              <div className="image-overlay">
                <h2>{isLogin ? 'Welcome Back!' : 'Start Your Journey!'}</h2>
                <p>Login to access your account and find the perfect PG accommodation</p>
                <div className="features-list">
                  <div className="feature-item">
                    <span className="check-icon">✓</span>
                    <span>Browse verified PG listings</span>
                  </div>
                  <div className="feature-item">
                    <span className="check-icon">✓</span>
                    <span>Direct contact with owners</span>
                  </div>
                  <div className="feature-item">
                    <span className="check-icon">✓</span>
                    <span>Save your favorite PGs</span>
                  </div>
                  <div className="feature-item">
                    <span className="check-icon">✓</span>
                    <span>List your PG for free</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="login-form-container">
              <div className="form-header">
                <h1>{isLogin ? 'Sign In' : 'Sign Up'}</h1>
                <p>Enter your credentials to access your account</p>
              </div>

              {/* Role Toggle */}
              <div className="role-toggle">
                <button 
                  className={`role-btn ${role === 'student' ? 'active' : ''}`} 
                  onClick={() => handleRoleChange('student')}
                >
                  👨‍🎓 Student
                </button>
                <button 
                  className={`role-btn ${role === 'owner' ? 'active' : ''}`} 
                  onClick={() => handleRoleChange('owner')}
                >
                  🏠 Owner
                </button>
                {/* Hidden button for simulated Admin access */}
                <button 
                  className={`role-btn ${role === 'admin' ? 'active' : ''}`} 
                  onClick={() => handleRoleChange('admin')}
                  style={{display: 'none'}}
                >
                  👑 Admin
                </button>
              </div>

              {LoginForm}
              {SignupForm}
            </div>
          </div>
        </div>
      </section>
      <Footer hasCreatorInfo={false} />
    </>
  );
};

export default Login;