import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import About from "./Pages/About/About";
import Checkout from "./Pages/Checkout/Checkout";
import ClassDetail from "./Pages/ClassDetail/ClassDetail";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Homepage/Home/Home";
import Login from "./Pages/Login/Login";
import OurClass from "./Pages/OurClass/OurClass";
import Payment from "./Pages/Payment/Payment";
import Plans from "./Pages/Plans/Plans";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div className="m-auto p-auto">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/class" element={<OurClass />} />
            <Route path="/class/:classId" element={<ClassDetail />} />
            <Route path="/plans/" element={<Plans />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/checkout/:PlanId"
              element={
                <PrivateRoute>
                  <Checkout />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/payment/:OrderId"
              element={
                <PrivateRoute>
                  <Payment />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
