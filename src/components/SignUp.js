import React from 'react';
import './Auth.css'; // Create and import your CSS file

function SignUp() {
  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <label>First Name *</label>
            <input type="text" placeholder="Enter your first name" required />
          </div>
          <div className="form-group">
            <label>Second Name *</label>
            <input type="text" placeholder="Enter your second name" required />
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label>Email *</label>
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input type="tel" placeholder="Enter your phone number" required />
            </div>
          </div>
          <div className="form-group">
            <label>Password *</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <div className="form-group">
            <label>Confirm Password *</label>
            <input type="password" placeholder="Confirm your password" required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <a href="/signin">Sign In</a></p>
      </div>
    </div>
  );
}

export default SignUp;