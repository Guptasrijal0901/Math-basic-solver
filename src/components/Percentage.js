import React, { useState } from 'react';
import '../Operation.css';

function Percentage() {
  const [value, setValue] = useState('');
  const [total, setTotal] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setResult((parseFloat(value) / parseFloat(total)) * 100);
  };

  return (
    <div className="operation">
      <h2>Percentage</h2>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter value"
      />
      <input
        type="number"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
        placeholder="Enter total"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Percentage: {result}%</p>}
    </div>
  );
}

export default Percentage;
