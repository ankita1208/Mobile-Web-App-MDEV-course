import React, { useState, useEffect } from 'react';
import './StockPage.css'; // Import your CSS file for styling

const StocksPage = () => {
  const [stocksData, setStocksData] = useState(null);
  const API_KEY = '84VGBTXXKTV703PM'; // Replace with your actual API key
  const SYMBOL = 'AAPL'; // Example stock symbol (Apple Inc.)

  useEffect(() => {
    // Fetch stock data from API
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${SYMBOL}&interval=5min&apikey=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setStocksData(data);
      })
      .catch(error => {
        console.error('Error fetching stock data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div className="stocks-page">
      <h2>Stocks Page</h2>
      {stocksData ? (
        <div className="stock-details">
          <h3>{stocksData['Meta Data']['2. Symbol']}</h3>
          <p>Last Refreshed: {stocksData['Meta Data']['3. Last Refreshed']}</p>
        </div>
      ) : (
        <p className="loading-text">Loading stock data...</p>
      )}
    </div>
  );
};

export default StocksPage;
