import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector(({ cart, product }) => {
    return cart.map((cartItem) => {
      return {
        ...cartItem,
        ...product.products.find((p) => p.id === cartItem.productId)
      };
    });
  });
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
          <CartItem key={cartItem.productId} cartItem={cartItem} />
        ))}
        <li>
          <p className="item"></p>
          <p className="price"></p>
          <p className="quantity"></p>
          <p className="total">
            $
            {cartItems
              .reduce((acc, item) => acc + item.quantity * item.price, 0)
              .toFixed(2)}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Cart;
