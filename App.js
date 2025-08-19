import React from "react";
import Product from "./components/Product";
import products from "./store/productList";

export default function App() {
  return (
    <div>
      {products.map(({ id, title, rating, price, imageurl }) => (
        <Product
          key={id}
          title={title}
          imageUrl={imageurl}
          price={price}
          rating={rating}
        />
      ))}
    </div>
  );
}
