import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Sample from "./Hooks/Sample";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Homepage/Home/Home";
import Login from "./Pages/Login/Login";
import OurClass from "./Pages/OurClass/OurClass";
import Plans from "./Pages/Plans/Plans";
import Register from "./Pages/Register/Register";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/class" element={<OurClass />} />
            <Route path="/plans/" element={<Plans />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sample" element={<Sample />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* <Route path="/dashboard/*" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
