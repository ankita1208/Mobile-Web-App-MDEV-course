// Import necessary modules and components
import './firebase-config.js'; // Import Firebase configuration (assuming this file contains Firebase setup)
import React from 'react';
import ReactDOM from 'react-dom';
import RoutesConfig from './RoutesConfig.js'; // Import your main component or root component

// Main App component, serves as the entry point of the application
const App = () => {
  return (
    <div className="App">
      {/* Render the main component that handles routing and navigation */}
      <RoutesConfig />
    </div>
  );
};

// Render the App component into the root element of the HTML document
ReactDOM.render(<App />, document.getElementById('root'));