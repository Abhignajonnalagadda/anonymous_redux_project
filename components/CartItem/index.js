import "./index.css";

const Cart = ({ cartItem }) => {
  const { item, price, quantity, id, title, rating, image } = cartItem;
  return (
    <li>
      <div className="">
        <img src={image} />
        <div>
          <p>{title}</p>
          <p>{rating} ⭐️⭐️⭐️⭐️⭐️</p>
        </div>
      </div>
      <p>{price}</p>
      <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
      <p>{price * quantity}</p>
    </li>
  );
};

export default Cart;
