import React, { useContext } from "react";
import { CartContext } from "../Cart/CartProvider";

const Cart = () => {
  const { state } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <h2>My Cart</h2>

      {state.cart.length === 0 ? (
        <h4>Cart is empty</h4>
      ) : (
        state.cart.map((item) => (
          <div key={item.id} className="border p-3 mb-2">
            <h5>{item.productNAME}</h5>
            <p>Price: ₹{item.productPRICE}</p>
            <p>Quantity: {item.productQuantity}</p>
          </div>
        ))
      )}

      <hr />

      <h4>Total Items: {state.len}</h4>
      <h4>Total Amount: ₹{state.totalAmount}</h4>
    </div>
  );
};

export default Cart;