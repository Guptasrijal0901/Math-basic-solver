import React, { useState } from 'react';
import '../Operation.css';

function Fraction() {
  const [numerator, setNumerator] = useState('');
  const [denominator, setDenominator] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setResult(parseFloat(numerator) / parseFloat(denominator));
  };

  return (
    <div className="operation">
      <h2>Fraction</h2>
      <input
        type="number"
        value={numerator}
        onChange={(e) => setNumerator(e.target.value)}
        placeholder="Enter numerator"
      />
      <input
        type="number"
        value={denominator}
        onChange={(e) => setDenominator(e.target.value)}
        placeholder="Enter denominator"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}

export default Fraction;
