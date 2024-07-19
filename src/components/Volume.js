import React, { useState } from 'react';
import '../Operation.css';

function Volume() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setResult(parseFloat(length) * parseFloat(width) * parseFloat(height));
  };

  return (
    <div className="operation">
      <h2>Volume</h2>
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
      <input
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        placeholder="Enter height"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Volume: {result}</p>}
    </div>
  );
}

export default Volume;
