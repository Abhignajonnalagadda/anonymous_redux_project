import React from "react";
import Header from "../components/Header";
const Cart = () => {
  return (
    <div>
      <Header />
      <div className="cart-container">
        <h2 className="cart-header">Items in your cart</h2>
        <ul className="list">
          <li>
            <p className="item">Item</p>
            <p className="price">Price</p>
            <p className="quantity">Quantity</p>
            <p className="total">Total</p>
          </li>
          <hr />
        </ul>
      </div>
    </div>
  );
};

export default Cart;
