import './App.css';
import {Routes, BrowserRouter, Link, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home';
import About from './views/About';
import Shop from './views/Shop';

export default function App() {
  return (
      <BrowserRouter>
	  	<Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
			  <Route path="/about" element={<About />} />
			  <Route path="/shop" element={<Shop />} />
            </Routes>
          </div>
      </BrowserRouter>
  );
}