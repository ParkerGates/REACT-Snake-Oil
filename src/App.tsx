import {Routes, BrowserRouter, Link, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home';
import About from './views/About';
import Shop from './views/Shop';
import './App.css';

export default function App() {

  return (
    <div className="scrollCutOff">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop/:details?" element={<Shop />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}