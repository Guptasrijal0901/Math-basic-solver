import React, { useState } from 'react';
import '../Operation.css';

function Proportion() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [num4, setNum4] = useState('');
  const [result, setResult] = useState('');

  const calculateProportion = () => {
    if (num1 && num2 && num3) {
      const res = (num3 * num2) / num1;
      setResult(`Proportion: ${res}`);
    }
  };

  return (
    <div className="operation">
      <h2>Proportion</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter first number" />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter second number" />
      <input type="number" value={num3} onChange={(e) => setNum3(e.target.value)} placeholder="Enter third number" />
      <button onClick={calculateProportion}>Calculate</button>
      <p>{result}</p>
    </div>
  );
}

export default Proportion;
