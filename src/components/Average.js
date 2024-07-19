import React, { useState } from 'react';
import '../Operation.css';

function Average() {
  const [values, setValues] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const nums = values.split(',').map(Number);
    const sum = nums.reduce((a, b) => a + b, 0);
    setResult(sum / nums.length);
  };

  return (
    <div className="operation">
      <h2>Average</h2>
      <input
        type="text"
        value={values}
        onChange={(e) => setValues(e.target.value)}
        placeholder="Enter values separated by commas"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Average: {result}</p>}
    </div>
  );
}

export default Average;
