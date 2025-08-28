import "./index.css";

const CartItem = ({ cartItem = {} }) => {
  const { item, price, quantity, id, title, rating, image } = cartItem;
  
  // Use actual values or fallbacks
  const displayTitle = title || "Product Name";
  const displayPrice = price || 20;
  const displayQuantity = quantity || 1;
  const displayImage = image || "https://via.placeholder.com/60x60?text=No+Image";
  const displayRating = rating || 5;
  
  return (
    <li className="cart-item">
      <div className="item">
        <img src={displayImage} alt={displayTitle} />
        <div>
          <p>{displayTitle}</p>
          <p>{displayRating} ⭐️</p>
        </div>
      </div>
      <p className="price">${displayPrice}</p>
      <div className="quantity">
        <button>-</button>
        <p>{displayQuantity}</p>
        <button>+</button>
      </div>
      <p className="total">${displayPrice * displayQuantity}</p>
    </li>
  );
};

export default CartItem;
