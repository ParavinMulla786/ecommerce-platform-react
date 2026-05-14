import React, { createContext, useReducer } from "react";
import { cartInitialState, cartReducer } from "./cartReducer";

// CREATE CONTEXT
export const CartContext = createContext();

// PROVIDER
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    cartInitialState
  );

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;