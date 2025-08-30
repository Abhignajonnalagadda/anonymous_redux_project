import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import "./index.css";
import { use } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((store) => store.cart);
  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <>
      <header>
        <div className="header-container">
          <Link to="/">
            <h2>Store</h2>
          </Link>
          <Link to="/cart" className="cart-link">
            <div className="cart">
              <FaCartShopping />
              <p>{cartItemCount}</p>
            </div>
          </Link>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
