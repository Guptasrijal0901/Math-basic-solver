import React, { useState } from 'react';
import '../Operation.css';

function Loss() {
  const [costPrice, setCostPrice] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setResult(parseFloat(costPrice) - parseFloat(sellingPrice));
  };

  return (
    <div className="operation">
      <h2>Loss</h2>
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
      {result !== null && <p>Loss: {result}</p>}
    </div>
  );
}

export default Loss;
