// Import necessary modules and components from React and React Router
import React from 'react';
import { Link } from 'react-router-dom';

// Functional component named Home
const Home = () => {
  return (
    <div>
      {/* Heading displaying a welcome message */}
      <h1>Welcome to My App</h1>

      {/* Link to navigate to the Register Page */}
      <Link to="/register">Go to Register Page</Link>
    </div>
  );
};

// Export the Home component to be used in other parts of the application
export default Home;
