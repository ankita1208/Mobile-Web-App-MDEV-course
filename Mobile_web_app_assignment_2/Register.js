import React, { useState } from 'react';
import { auth, firestore, doc, setDoc } from './firebase-config.js';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Register.css'; 

// Functional component named Register
const Register = () => {
  // State variables for email, password, display name, and error message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');
  
  // React Router's hook to enable navigation within the component
  const navigate = useNavigate();

  // Function to handle registration form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Create a new user with email and password using Firebase authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Update user's display name using Firebase authentication
      await updateProfile(user, { displayName: displayName });
      
      const db = firestore;
      // Use user UID as the document ID in the 'users' collection in Firestore
      const userDocRef = doc(db, 'users', user.uid);
      // Set user data in Firestore document
      await setDoc(userDocRef, {
        email: user.email,
        displayName: displayName, // Set the display name in Firestore
        // Additional user data fields if needed
      });

      // Navigate to the dashboard page after successful registration
      navigate('/dashboard');
    } catch (error) {
      setError(error.message); // Set error message in case of registration failure
    }
  };

  // JSX structure for the registration form and UI
  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Display Name:</label>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />
        {/* Submit button for the registration form */}
        <button type="submit">Register</button>
        {/* Display error message if there's an error */}
        {error && <p className="error-message">{error}</p>}
      </form>
      <p>
        Already have an account? <span onClick={() => navigate('/login')} className="login-link">Login</span>
      </p>
    </div>
  );
};

// Export the Register component to be used in other parts of the application
export default Register;
