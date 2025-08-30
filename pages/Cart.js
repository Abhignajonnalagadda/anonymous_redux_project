import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart);
  console.log(cartItems);
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
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
