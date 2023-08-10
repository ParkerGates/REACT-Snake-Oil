import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, BrowserRouter, Link, Route} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/yep">Yep</Link>
            </li>
          </ul>

          <div>
            <Routes>
              <Route path="/" element={<Home />} />
			  <Route path="/about" element={<About />} />
			  <Route path="/yep" element={<Yep />} />
            </Routes>
          </div>
      </BrowserRouter>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

function Yep() {
  return (
    <div>
      <h1>Yep</h1>
    </div>
  );
}

export default App;
