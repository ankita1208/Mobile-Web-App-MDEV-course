import React, { useEffect, useState } from 'react';
import { auth, firestore, doc, setDoc } from './firebase-config.js';

// Functional component named UserProfileWidget
const UserProfileWidget = () => {
  // State variable to store the user data received from Firebase Authentication
  const [user, setUser] = useState(null);

  // useEffect hook to handle authentication state changes and update user data in Firestore
  useEffect(() => {
    // Subscribe to authentication state changes. The callback function runs when the authentication state changes.
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // If a user is authenticated, update the user state variable with the user data
        setUser(user);

        // Set user data in Firestore. This code runs whenever the authentication state changes.
        const db = firestore; // Get Firestore instance
        const userDocRef = doc(db, 'users', user.uid); // Reference to the user's document in the 'users' collection
        setDoc(userDocRef, {
          email: user.email, // User's email address
          displayName: user.displayName, // User's display name
          // Additional user data fields if needed
        });
      } else {
        // If no user is authenticated, set the user state variable to null
        setUser(null);
      }
    });

    // Cleanup function to unsubscribe from authentication state changes when the component unmounts
    return () => {
      unsubscribe(); // Unsubscribe from authentication state changes to avoid memory leaks
    };
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  // Render the component JSX
  return (
    <div className="profile-widget"> 
      {user ? ( 
        <div>
          <h3>User Profile</h3> 
          <p>Email: {user.email}</p>
          <p>Display Name: {user.displayName}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfileWidget; // Export the UserProfileWidget component for use in other parts of the application
