import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import ProductDetails from "./Pages/ProductDetails";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/products/:id" element={<ProductDetails />} />

        {/* ✅ FIX ADDED */}
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;