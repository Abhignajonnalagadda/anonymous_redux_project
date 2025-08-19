import React from "react";
import Product from "./components/Product";
import products from "./store/productList";
import "./App.css";

export default function App() {
  return (
    <div className="products-container">
      {products.map(({ id, title, rating, price, image }) => (
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
