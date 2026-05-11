import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import ProductDetails from "./Pages/ProductDetails";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Pages/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
         
        {/* Home Page */}
        <Route path="/" element={<Dashboard />} />

        {/* Product Details Page */}
        <Route path="/products/:id" element={<ProductDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;