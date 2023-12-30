import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WeatherPage from './WeatherPage.js'; // Import WeatherPage component
import StocksPage from './StocksPage.js'; // Import StocksPage component

// DashboardRoutes component definition
const DashboardRoutes = () => {
  return (
    <Routes> {/* Define nested routes for dashboard pages */}
      {/* Route for WeatherPage component */}
      <Route path="/dashboard/*" element={<WeatherPage />} />
      {/* Route for StocksPage component */}
      <Route path="/dashboard/stocks/*" element={<StocksPage />} />
    </Routes>
  );
};

export default DashboardRoutes; // Export DashboardRoutes component for use in other parts of the application
