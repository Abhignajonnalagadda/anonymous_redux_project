import React from "react";
import Product from "./components/Product";
import { useSelector } from "react-redux";
import "./App.css";

export default function App() {
  const productList = useSelector((state) => state.product);
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
}
