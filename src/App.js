import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import { Routes, Route } from 'react-router-dom'
import Products from './components/Products';
import Contact from './components/Contact';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Carousel/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
