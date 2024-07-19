import React, { useState } from 'react';
import '../Operation.css';

function Perimeter() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setResult(2 * (parseFloat(length) + parseFloat(width)));
  };

  return (
    <div className="operation">
      <h2>Perimeter</h2>
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
      {result !== null && <p>Perimeter: {result}</p>}
    </div>
  );
}

export default Perimeter;
