import React from "react";
const Product = ({ title, rating, price, image }) => {
  return (
    <div className="product">
      <img src={image} alt={title} />
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div className="rating-price-container">
        <p>{rating.rate} ⭐️⭐️⭐️⭐️⭐️</p>
        <p>${price}</p>
      </div>
      <div className="btns-container">
        <button>Add to cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Product;
