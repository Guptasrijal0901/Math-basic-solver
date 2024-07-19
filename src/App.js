import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
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
import './Home.css';
import './Operation.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/addition" element={<Addition />} />
          <Route path="/subtraction" element={<Subtraction />} />
          <Route path="/multiplication" element={<Multiplication />} />
          <Route path="/division" element={<Division />} />
          <Route path="/profit" element={<Profit />} />
          <Route path="/loss" element={<Loss />} />
          <Route path="/simpleinterest" element={<SimpleInterest />} />
          <Route path="/compoundinterest" element={<CompoundInterest />} />
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

function LandingPage() {
  const operations = [
    { path: '/addition', label: 'Addition' },
    { path: '/subtraction', label: 'Subtraction' },
    { path: '/multiplication', label: 'Multiplication' },
    { path: '/division', label: 'Division' },
    { path: '/profit', label: 'Profit' },
    { path: '/loss', label: 'Loss' },
    { path: '/simpleinterest', label: 'Simple Interest' },
    { path: '/compoundinterest', label: 'Compound Interest' },
    { path: '/percentage', label: 'Percentage' },
    { path: '/average', label: 'Average' },
    { path: '/area', label: 'Area' },
    { path: '/perimeter', label: 'Perimeter' },
    { path: '/volume', label: 'Volume' },
    { path: '/fraction', label: 'Fraction' },
    { path: '/ratio', label: 'Ratio' },
    { path: '/proportion', label: 'Proportion' },
  ];

  return (
    <div className="landing-page">
      <h1>Math Operations</h1>
      {operations.map((operation) => (
        <div className="operation-card" key={operation.path}>
          <Link to={operation.path}>{operation.label}</Link>
        </div>
      ))}
    </div>
  );
}

export default App;
