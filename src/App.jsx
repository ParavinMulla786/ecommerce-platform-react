import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home Page */}
        <Route path="/" element={<Dashboard />} />

        {/* Product Details Page */}
        <Route path="/products/:id" element={<ProductDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;