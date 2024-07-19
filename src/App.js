import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Addition from './components/Addition';
import Subtraction from './components/Subtraction';
import Multiplication from './components/Multiplication';
import Division from './components/Division';
import Profit from './components/Profit';
import Loss from './components/Loss';
import SimpleInterest from './components/SimpleInterest';
import CompoundInterest from './components/CompoundInterest';
import Percentage from './components/Percentage';
import Average from './components/Average';
import Area from './components/Area';
import Perimeter from './components/Perimeter';
import Volume from './components/Volume';
import Fraction from './components/Fraction';
import Ratio from './components/Ratio';
import Proportion from './components/Proportion';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addition" element={<Addition />} />
          <Route path="/subtraction" element={<Subtraction />} />
          <Route path="/multiplication" element={<Multiplication />} />
          <Route path="/division" element={<Division />} />
          <Route path="/profit" element={<Profit />} />
          <Route path="/loss" element={<Loss />} />
          <Route path="/simple-interest" element={<SimpleInterest />} />
          <Route path="/compound-interest" element={<CompoundInterest />} />
          <Route path="/percentage" element={<Percentage />} />
          <Route path="/average" element={<Average />} />
          <Route path="/area" element={<Area />} />
          <Route path="/perimeter" element={<Perimeter />} />
          <Route path="/volume" element={<Volume />} />
          <Route path="/fraction" element={<Fraction />} />
          <Route path="/ratio" element={<Ratio />} />
          <Route path="/proportion" element={<Proportion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
