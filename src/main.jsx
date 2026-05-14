import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

import Themeprovider from "./theme/ThemeProvider.jsx";
import CartProvider from "./Cart/CartProvider.jsx";

createRoot(document.getElementById("root")).render(

  <StrictMode>

    <Themeprovider>

      <CartProvider>
        <App />
      </CartProvider>

    </Themeprovider>

  </StrictMode>

);