import React, { useState } from 'react';
import '../Operation.css';

function CompoundInterest() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [n, setN] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const nCompounds = parseFloat(n);
    setResult(P * Math.pow(1 + r / nCompounds, nCompounds * t));
  };

  return (
    <div className="operation">
      <h2>Compound Interest</h2>
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
      <input
        type="number"
        value={n}
        onChange={(e) => setN(e.target.value)}
        placeholder="Enter number of times interest applied per time period"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Compound Interest: {result}</p>}
    </div>
  );
}

export default CompoundInterest;
