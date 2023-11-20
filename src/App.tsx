import {Routes, BrowserRouter, Route} from 'react-router-dom';
import ScrollToTop from './utility/scrollToTop';
import Navbar from './components/Navbar/Navbar';
import Home from './views/Home';
import About from './views/About';
import Shop from './views/Shop';
import Snake from './views/Snake';
import './App.css';

export default function App() {

  return (
    <div id='page_body' className="scrollCutOff">
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop/:details?" element={<Shop />} />
        <Route path='/snake' element={<Snake />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}