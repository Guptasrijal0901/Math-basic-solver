import React, { useState } from 'react';
import '../Operation.css';

function Division() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  return (
    <div className="operation">
      <h2>Division</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

export default Division;
