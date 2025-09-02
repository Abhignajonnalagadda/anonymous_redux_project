import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import "./index.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProducts,
  fetchInProgress,
  fetchError
} from "../../store/slices/productSlicer";
import {
  loadCartItems,
  setIsLoading,
  setError
} from "../../store/slices/cartSlicer";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.list);
  const cartItemCount = cart?.reduce((acc, item) => acc + item.quantity, 0);
  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchInProgress(true));
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch(addProducts(data));
      } catch (e) {
        dispatch(fetchError(e.message));
      }
      dispatch(setIsLoading(true));
      try {
        const response = await fetch("https://fakestoreapi.com/carts/1");
        const data = await response.json();
        dispatch(loadCartItems(data));
      } catch (e) {
        dispatch(setError(e.message));
      }
    };
    fetchData();
  }, [dispatch]);

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
              <p>{cartItemCount || 0}</p>
            </div>
          </Link>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;
