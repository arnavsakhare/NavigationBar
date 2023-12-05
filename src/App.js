import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';

function App() {

  

  return (
   <>
    <Navbar />
    <div className='cointainer'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
    
   </>
  );
}

export default App;
