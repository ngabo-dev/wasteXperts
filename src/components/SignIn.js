import React, { useState } from 'react';
import './Auth.css'; // Import the CSS file

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    // Add your sign-in logic here
    console.log('SignIn', { email, password });
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
}

export default SignIn;