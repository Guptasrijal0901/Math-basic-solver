import React, { useState } from 'react';
import '../Operation.css';

function Area() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setResult(parseFloat(length) * parseFloat(width));
  };

  return (
    <div className="operation">
      <h2>Area</h2>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        placeholder="Enter length"
      />
      <input
        type="number"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        placeholder="Enter width"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Area: {result}</p>}
    </div>
  );
}

export default Area;
