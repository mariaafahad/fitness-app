
import './App.css';
import Home from './Pages/Homepage/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pricing from './Pages/Pricing/Pricing';
import Services from './Pages/Services/Services';
import OurClass from './Pages/OurClass/OurClass';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/class" element={<OurClass />} />
            <Route path="/pricing/" element={<Pricing />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
