import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import WeatherPage from './WeatherPage.js'; // Import WeatherPage component
import StocksPage from './StocksPage.js'; // Import StocksPage component
import UserInformationWidget from './UserProfileWidget.js'; // Import UserInformationWidget component
import UserListComponent from './UserListComponent.js'; // Import UserListComponent component
import Calculator from './Calculator.js'; // Import Calculator component
import ToDoList from './ToDoList.js'; // Import ToDoList component
import './DashboardPage.css'; // Import styles for the Dashboard

// Dashboard component definition
const Dashboard = () => {
  return (
    <div className="dashboard-container"> {/* Container for the entire dashboard */}
      <h2>Dashboard</h2> {/* Dashboard heading */}
      <nav className="dashboard-nav"> {/* Navigation bar for dashboard */}
        <ul>
          {/* Navigation links for Weather and Stocks pages */}
          <li><Link to="/dashboard/weather">Weather</Link></li>
          <li><Link to="/dashboard/stocks">Stocks</Link></li>
        </ul>
      </nav>
      <div className="dashboard-widgets"> {/* Container for dashboard widgets */}
        {/* User Information Widget */}
        <div className="widget user-info-widget">
          <UserInformationWidget /> {/* Render UserInformationWidget component */}
        </div>
        {/* User List Widget */}
        <div className="widget user-list-widget">
          <UserListComponent /> {/* Render UserListComponent component */}
        </div>
        {/* Calculator Widget */}
        <div className="widget calculator-widget">
          <Calculator /> {/* Render Calculator component */}
        </div>
        {/* To-Do List Widget */}
        <div className="widget todo-list-widget">
          <ToDoList /> {/* Render ToDoList component */}
        </div>
      </div>
      <Routes> {/* React Router Routes for nested pages */}
        {/* Route for WeatherPage component */}
        <Route path="/dashboard/weather/*" element={<WeatherPage />} />
        {/* Route for StocksPage component */}
        <Route path="/dashboard/stocks/*" element={<StocksPage />} />
      </Routes>
    </div>
  );
};

export default Dashboard; // Export Dashboard component for use in other parts of the application
