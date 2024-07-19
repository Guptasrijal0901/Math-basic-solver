import React, { useState } from 'react';
import '../Operation.css';

function Profit() {
  const [costPrice, setCostPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setResult(parseFloat(sellingPrice) - parseFloat(costPrice));
  };

  return (
    <div className="operation">
      <h2>Profit</h2>
      <input
        type="number"
        value={costPrice}
        onChange={(e) => setCostPrice(e.target.value)}
        placeholder="Enter cost price"
      />
      <input
        type="number"
        value={sellingPrice}
        onChange={(e) => setSellingPrice(e.target.value)}
        placeholder="Enter selling price"
      />
      <button onClick={handleCalculate}>Calculate</button>
      {result !== null && <p>Profit: {result}</p>}
    </div>
  );
}

export default Profit;
