import React, { useState } from 'react';

// Calculator component using functional component and hooks
const Calculator = () => {
  // State variables for expression and result
  const [expression, setExpression] = useState(''); // Holds the mathematical expression
  const [result, setResult] = useState(''); // Holds the calculated result of the expression

  // Function to handle button clicks
  const handleButtonClick = (value) => {
    // If the clicked button is '=', evaluate the expression
    if (value === '=') {
      try {
        const evalResult = eval(expression); // Evaluate the mathematical expression
        setResult(evalResult); // Set the result state with the evaluated value
      } catch (error) {
        setResult('Error'); // If evaluation fails, set the result to 'Error'
      }
    } else if (value === 'C') {
      // If the clicked button is 'C', clear the expression and result
      setExpression(''); // Clear the expression
      setResult(''); // Clear the result
    } else {
      // For numeric and operator buttons, update the expression state
      setExpression(expression + value); // Append the clicked value to the expression
    }
  };

  // JSX structure for the Calculator component
  return (
    <div className="calculator-widget">
      <h3>Calculator</h3>
      <div className="calculator-display">
        {/* Display the current mathematical expression */}
        <div className="expression">{expression}</div>
        {/* Display the calculated result */}
        <div className="result">{result}</div>
      </div>
      <div className="calculator-buttons">
        {/* Numeric buttons */}
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        {/* ... other number buttons ... */}
        {/* Operator buttons */}
        <button onClick={() => handleButtonClick('+')}>+</button>
        {/* Calculate and clear buttons */}
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
      </div>
    </div>
  );
};

// Export the Calculator component for use in other parts of the application
export default Calculator;
