import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import "./index.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <h2>Store</h2>
          <Link to="/cart" className="cart-link">
            <div className="cart">
              <FaCartShopping />
              <p>0</p>
            </div>
          </Link>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
