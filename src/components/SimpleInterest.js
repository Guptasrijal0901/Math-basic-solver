import React, { useState } from 'react';
import '../Operation.css';

function SimpleInterest() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setResult((parseFloat(principal) * parseFloat(rate) * parseFloat(time)) / 100);
  };

  return (
    <div className="operation">
      <h2>Simple Interest</h2>
      <input
        type="number"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        placeholder="Enter principal amount"
      />
      <input
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        placeholder="Enter rate of interest"
      />
      <input
        type="number"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        placeholder="Enter time in years"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Simple Interest: {result}</p>}
    </div>
  );
}

export default SimpleInterest;
