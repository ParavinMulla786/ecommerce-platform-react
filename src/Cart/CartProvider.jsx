import React, { createContext, useReducer } from "react";
import { cartReducer, initialState } from "./cartReducer";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;