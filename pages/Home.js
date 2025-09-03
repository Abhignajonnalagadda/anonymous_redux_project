import Product from "../components/Product";
import { useSelector } from "react-redux";
import { getProducts, getIsFetching, getError } from "../store/slices/productSlicer";

const Home = () => {
  const productList = useSelector(getProducts);
  const isFetching = useSelector(getIsFetching);
  const error = useSelector(getError);

  return isFetching ? (
    <h1 style={{textAlign: "center"}}>Loading...</h1>
  ) : error !== "" ? (
    <h1 style={{textAlign: "center"}}>{error}</h1>
  ) : (
    <div className="products-container">
      {productList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          title={title}
          image={image}
          price={price}
          rating={rating}
          id={id}
        />
      ))}
    </div>
  );
};

export default Home;
