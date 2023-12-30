// Import necessary modules and components from React and Firebase
import React, { useState } from 'react';
import { auth, firestore, doc, getDoc } from './firebase-config.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // Import your CSS file for Login component

// Functional component named Login
const Login = () => {
  // State variables for email, password, and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // React Router's hook to enable navigation within the component
  const navigate = useNavigate();

  // Function to handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Check if the user exists in Firestore "users" collection using UID as document ID
      const db = firestore;
      const userRef = doc(db, 'users', auth.currentUser.uid);
      const userDoc = await getDoc(userRef);

      // If the user exists in Firestore, proceed with login
      if (userDoc.exists()) {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/dashboard'); // Navigate to the dashboard page after successful login
      } else {
        setError('User not found. Please register.'); // Display error message if user is not found
      }
    } catch (error) {
      setError(error.message); // Set error message in case of login failure
    }
  };

  // JSX structure for the login form and UI
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {/* Input field for email */}
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* Input field for password */}
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* Submit button for the form */}
        <button type="submit">Login</button>
        {/* Display error message if there's an error */}
        {error && <p className="error-message">{error}</p>}
      </form>
      {/* Link to navigate to the Register Page */}
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

// Export the Login component to be used in other parts of the application
export default Login;
