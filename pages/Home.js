import React from "react";
import Header from "../components/Header";
import Product from "../components/Product";
import { useSelector } from "react-redux";

const Home = () => {
  const productList = useSelector((store) => store.product);
  return (
    <div>
      <Header />
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
    </div>
  );
};

export default Home;
