import { useDispatch } from "react-redux";
import {
  increaseCartQuantity,
  decreaseCartQuantity
} from "../../store/cartReducer";
import "./index.css";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const {
    price = 0,
    quantity = 1,
    title = "Product Name",
    rating = 0,
    image = "https://via.placeholder.com/60x60?text=No+Image",
    productId
  } = cartItem;

  return (
    <li className="cart-item">
      <div className="item">
        <img src={image} alt={title} />
        <div>
          <p>{title}</p>
          <p>{rating.rate} ⭐️</p>
        </div>
      </div>
      <p className="price">${price}</p>
      <div className="quantity">
        <button
          onClick={() => {
            dispatch(decreaseCartQuantity({ productId }));
          }}
        >
          -
        </button>
        <p>{quantity}</p>
        <button
          onClick={() => {
            dispatch(increaseCartQuantity({ productId }));
          }}
        >
          +
        </button>
      </div>
      <p className="total">${(price * quantity).toFixed(2)}</p>
    </li>
  );
};

export default CartItem;
