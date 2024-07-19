import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Math Solver App</h1>
      <div className="options">
        <Link to="/addition">Addition</Link>
        <Link to="/subtraction">Subtraction</Link>
        <Link to="/multiplication">Multiplication</Link>
        <Link to="/division">Division</Link>
        <Link to="/profit">Profit</Link>
        <Link to="/loss">Loss</Link>
        <Link to="/simple-interest">Simple Interest</Link>
        <Link to="/compound-interest">Compound Interest</Link>
        <Link to="/percentage">Percentage</Link>
        <Link to="/average">Average</Link>
        <Link to="/area">Area</Link>
        <Link to="/perimeter">Perimeter</Link>
        <Link to="/volume">Volume</Link>
        <Link to="/fraction">Fraction</Link>
        <Link to="/ratio">Ratio</Link>
        <Link to="/proportion">Proportion</Link>
      </div>
    </div>
  );
}

export default Home;
