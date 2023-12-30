import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary modules

import Login from './Login.js'; // Import Login component
import Register from './Register.js'; // Import Register component
import Home from './Home.js'; // Import Home component
import Dashboard from './DashboardPage.js'; // Import Dashboard component
import DashboardRoutes from './DashboardRoutes.js'; // Import DashboardRoutes component

// Functional component named RoutesConfig
const RoutesConfig = () => {
  return (
    <Router>
      {/* Define routes using React Router's Routes component */}
      <Routes>
        {/* Route for the home page, rendered using Home component */}
        <Route path="/" element={<Home />} />
        {/* Route for the registration page, rendered using Register component */}
        <Route path="/register" element={<Register />} />
        {/* Route for the login page, rendered using Login component */}
        <Route path="/login" element={<Login />} />
        {/* Route for the main dashboard page, rendered using Dashboard component */}
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Route for additional dashboard routes, rendered using DashboardRoutes component */}
        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
    </Router>
  );
};

// Export the RoutesConfig component to be used in other parts of the application
export default RoutesConfig;

// Get the root element from the DOM
const root = document.getElementById('root');

// Create a root using React's createRoot method and render the RoutesConfig component into it
const reactRoot = createRoot(root);
reactRoot.render(<RoutesConfig />); // Render the main component into the root element
