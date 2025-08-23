import React from "react";
const Cart = () => {
  return (
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
  );
};

export default Cart;
