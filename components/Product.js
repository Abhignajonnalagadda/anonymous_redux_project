import React from "react";
const Product = ({ title, rating, price, image }) => {
  return (
    <div className="product">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="title-container">
        <h3>
          <a href="#">{title}</a>
        </h3>
      </div>
      <div>
        <p>{rating.rate} ⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
        <p>{price}</p>
      </div>
      <div>
        <button>Add to cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Product;
