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
  setError,
  getAllCartItems
} from "../../store/slices/cartSlicer";
import fetchApi from "../../store/middlewares/api";

const Header = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getAllCartItems);
  const cartItemCount = cart?.reduce((acc, item) => acc + item.quantity, 0);
  useEffect(() => {
    dispatch(fetchApi({
      url: "products",
      onStart: fetchInProgress,
      onSuccess: addProducts,
      onError: fetchError
    }))
    dispatch(fetchApi({
      url: "carts/1",
      onStart: setIsLoading,
      onSuccess: loadCartItems,
      onError: setError
    }))
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
