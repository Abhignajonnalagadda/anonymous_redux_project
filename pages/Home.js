import Product from "../components/Product";
import { useSelector } from "react-redux";

const Home = () => {
  const productList = useSelector((store) => store.product);
  return (
    <div className="products-container">
      {productList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          title={title}
          image={image}
          price={price}
          rating={rating}
        />
      ))}
    </div>
  );
};

export default Home;
